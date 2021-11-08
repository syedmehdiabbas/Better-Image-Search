import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink, BrowserRouter } from "react-router-dom";
import {
  Container,
  Spinner,
  VStack,
  Link,
  Image,
  Button,
  Text,
  HStack,
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

  return Object.keys(image).length !== 0 ? (
    <Container centerContent maxW="container.lg" minH="90vh">
      <VStack my={8} spacing={6}>
        <Image boxShadow="inner" src={image.urls.regular}></Image>
        <HStack>
          <Text>Clicked by </Text>
          <Link href={image.user.portfolio_url}>
            {image.user.first_name} {image.user.last_name}
          </Link>
        </HStack>
        <Button
          colorScheme="teal"
          onClick={() => {
            window.location.href = image.links.download;
          }}>
          Download
        </Button>
      </VStack>
    </Container>
  ) : (
    <Spinner size="xl"></Spinner>
  );
}

export default PhotoPage;
