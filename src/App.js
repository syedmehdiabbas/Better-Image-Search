import {
  ChakraProvider,
  Heading,
  Text,
  Container,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import PhotoGrid from "./components/PhotoGrid";
import Footer from "./components/Footer";
import { createApi } from "unsplash-js";
import PhotoPage from "./components/PhotoPage";
import theme from "./theme";

const unsplashAPI = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});

function App() {
  const [gridPhotos, setGridPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  function handleSearch() {
    unsplashAPI.search
      .getPhotos({
        query: searchInput,
        perPage: 12,
      })
      .then((res) => {
        setGridPhotos(res.response.results);
        window.scrollBy({
          left: 0,
          top: window.innerHeight,
          behavior: "smooth",
        });
      })
      .catch((e) => console.error(e));
  }

  function homeLoad() {
    unsplashAPI.photos
      .list({ orderBy: "popular", perPage: 12 })
      .then((res) => {
        setGridPhotos(res.response.results);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    homeLoad();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="full" textAlign="center">
        <Router>
          <Navbar homeLoad={homeLoad}></Navbar>
          <Heading color="teal.400" my={4}>
            Better Image Search
          </Heading>
          <Switch>
            <Route exact path="/">
              <VStack spacing={2}>
                <Text fontSize="2xl">
                  Get high quality stock photos without any hassle
                </Text>

                <Search
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  handleSearch={handleSearch}></Search>
              </VStack>
              <PhotoGrid photos={gridPhotos}></PhotoGrid>
            </Route>
            <Route path="/photo/:id">
              <PhotoPage unsplashAPI={unsplashAPI} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
