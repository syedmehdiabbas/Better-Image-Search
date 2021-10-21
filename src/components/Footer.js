import React from "react";
import { Center, Code, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Center flexDirection="column" py={10} bg="teal" color="whiteAlpha.900">
      <Code color="white" bg="teal">
        Cloned by <Link href="https://twitter.com/MehdiiiTweets">Mehdi</Link>
      </Code>
      <Code color="white" bg="teal">
        Photos by <Link href="https://picsum.photos/">Lorem Picsum</Link>
      </Code>
    </Center>
  );
}

export default Footer;
