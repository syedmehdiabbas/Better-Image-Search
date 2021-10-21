import {
  ChakraProvider,
  VStack,
  Text,
  ButtonGroup,
  Center,
  Container,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import PhotoGrid from "./components/PhotoGrid";
import Footer from "./components/Footer";
import CategoryButton from "./components/CategoryButton";
import WebSeries from "./components/WebSeries";
import PhotoGrid2 from "./components/PhotoGrid2";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="1200px">
        <Navbar></Navbar>
        <VStack bg="blue.100" py={20} spacing={10}>
          <Text fontSize="4xl">Move the world</Text>
          <Search></Search>
        </VStack>
        <Center>
          <ButtonGroup
            flexDirection={["column", "column", "row"]}
            variant="ghost"
            py={[0, 0, 5]}
            spacing={12}>
            {[
              "",
              "CREATIVE",
              "EDITORIAL",
              "VIDEO",
              "MUSIC",
              "BLOG",
              "COLLECTIONS",
              " ",
            ].map((c) => (
              <CategoryButton key={c} category={c} />
            ))}
          </ButtonGroup>
        </Center>
        <PhotoGrid />
        <WebSeries />
        <PhotoGrid2 />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
