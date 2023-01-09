import {
  ChakraProvider,

} from "@chakra-ui/react";
import Hero from "@components/Hero";
import theme from "./theme";
import Fonts from "./Fonts";
// import "./styles.css";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
