import {
  ChakraProvider,

} from "@chakra-ui/react";
import Hero from "@components/Hero";
import theme from "./theme";
import Fonts from "./Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Hero />
   
    </ChakraProvider>
  );
}

export default App;
