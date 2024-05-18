"use client";

import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@/app/globals.css";
import { Navigation } from "@/components/navigation";
import { HelloNearContract, NetworkId } from "@/config";
import { NearContext } from "@/context";
import BootstrapClient from "@/components/BootstrapClient.js";
import { Wallet } from "@/wallets/near";
import { ThemeProvider } from "@/context/ThemeContext";

const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: HelloNearContract,
});

// Layout Component
export default function RootLayout({ children }) {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <html lang="en">
      <body>
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <Navigation />
          <ThemeProvider>
            {children}
            <BootstrapClient />
          </ThemeProvider>
        </NearContext.Provider>
      </body>
    </html>
  );
}
