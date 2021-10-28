import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink, BrowserRouter } from "react-router-dom";
import {
  Container,
  Loading,
  VStack,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";

function PhotoPage({ unsplashAPI }) {
  let { id } = useParams();
  const [image, setImage] = useState({});

  useEffect(() => {
    unsplashAPI.photos
      .get({ photoId: id })
      .then((res) => {
        console.log(res);
        setImage(res.response);
        console.log(image);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    Object.keys(image).length !== 0 && (
      <Container centerContent maxW="container.lg">
        <Image boxShadow="inner" src={image.urls.small} my={8}></Image>
        <Button
          colorScheme="pink"
          onClick={() => {
            window.location.href = image.links.download;
          }}>
          Download
        </Button>
      </Container>
    )
  );
}

export default PhotoPage;
