import React from "react";
import { Center, Code, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Center
      flexDirection="column"
      mt={10}
      py={5}
      bg="teal"
      color="whiteAlpha.900">
      <Code color="white" bg="teal">
        Made by <Link href="https://twitter.com/MehdiiiTweets">Mehdi</Link>
      </Code>
      <Code color="white" bg="teal">
        Using
        <Link href="https://unsplash.com/documentation"> Unsplash API </Link>
        and
        <Link href="https://chakra-ui.com/"> Chakra UI</Link>
      </Code>
    </Center>
  );
}

export default Footer;
