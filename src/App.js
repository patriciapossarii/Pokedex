import Router from "./Router/Router";
import { ChakraProvider, Flex } from '@chakra-ui/react'



function App() {
  return (
  
      <ChakraProvider resetCSS>
           <Router/>
      </ChakraProvider>
    
  );
}

export default App;
