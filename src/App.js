import {
  ChakraProvider,
  Text,
  Container,
  VStack,
  Image,
  Link,
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

const unsplashAPI = createApi({ accessKey: process.env.REACT_APP_ACCESS_KEY });

function App() {
  const [gridPhotos, setGridPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  useEffect(() => {
    unsplashAPI.photos
      .list({ orderBy: "popular", perPage: 12 })
      .then((res) => {
        setGridPhotos(res.response.results);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="full" bg="gray.100">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <VStack spacing={2} py={16}>
                <Text fontSize="3xl">Get high quality photos</Text>
                <Text fontSize="3xl">No signup required</Text>
                <Search
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  handleSearch={handleSearch}></Search>
              </VStack>
              <PhotoGrid photos={gridPhotos} />
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
