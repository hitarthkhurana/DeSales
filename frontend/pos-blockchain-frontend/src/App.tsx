import {
  Box,
  Heading,
  Image,
  Highlight,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import "./App.css";
import banana from "./assets/banana.png";

function App() {
  const handleClickEvent = () => {
    console.log("Checkout Done!");
  };
  return (
    <SimpleGrid
      height={"100vh"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Box borderWidth={3} borderRadius={10} borderColor={"teal"} padding={100}>
        <Image src={banana} height={"200px"} marginBottom={10} />
        <Heading lineHeight="tall" fontSize={"40px"}>
          <Highlight
            query={["Banana"]}
            styles={{ bg: "teal", borderRadius: "5px", padding: "5px" }}
          >
            1 x Banana
          </Highlight>
        </Heading>
        <Heading lineHeight="tall" fontSize={"40px"}>
          $ 1.74
        </Heading>
        <Button colorScheme="blue" onClick={handleClickEvent}>
          Checkout
        </Button>
      </Box>
    </SimpleGrid>
  );
}

export default App;
