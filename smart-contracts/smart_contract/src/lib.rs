
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{env, near_bindgen, AccountId, Promise, PanicOnDefault};

#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Debug, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Sale {
    sale_id: u64,
    amount: u128, // Using u128 directly for balance
    item_description: String,
    timestamp: u64,
    buyer: AccountId,
    seller: AccountId,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct POSContract {
    sales: Vec<Sale>,
    owner: AccountId,
}

#[near_bindgen]
impl POSContract {
    #[init]
    pub fn new(owner: AccountId) -> Self {
        Self {
            sales: Vec::new(),
            owner,
        }
    }

    #[payable]
    pub fn record_sale(
        &mut self,
        sale_id: u64,
        item_description: String,
        seller: AccountId,
    ) -> bool {
        let buyer = env::predecessor_account_id();
        let amount = env::attached_deposit();

        let sale = Sale {
            sale_id,
            amount: 1,
            item_description: item_description.clone(),
            timestamp: env::block_timestamp(),
            buyer: buyer.clone(),
            seller: seller.clone(),
        };

        self.sales.push(sale);

        env::log_str(&format!(
            "Sale recorded: ID = {}, Amount = {}, Item = {}, Buyer = {}, Seller = {}, Timestamp = {}",
            sale_id, amount, item_description, buyer, seller, env::block_timestamp()
        ));

        Promise::new(seller.clone()).transfer(amount)
            .then(
                Self::ext(env::current_account_id())
                    .on_transfer_complete(buyer)
            );
        true
    }

    pub fn get_sales(&self) -> Vec<Sale> {
        self.sales.clone()
    }

    pub fn get_owner(&self) -> AccountId {
        self.owner.clone()
    }

    #[private]
    pub fn on_transfer_complete(&self, buyer: AccountId) -> bool {
        env::log_str(&format!("Transfer to seller completed by {}", buyer));
        true
    }
}

