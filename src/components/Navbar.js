import React from "react";
import { Flex, ButtonGroup, Button, Heading, useToast } from "@chakra-ui/react";
import { CopyIcon, ChevronRightIcon } from "@chakra-ui/icons";
import DrawerBrowse from "./DrawerBrowse";
import DrawerBoards from "./DrawerBoards";

function Navbar() {
  const toast = useToast();

  return (
    <Flex
      direction={["column", "column", "row"]}
      m={[4, 4, 0]}
      justify="space-around"
      align="center"
      height="80px">
      <ButtonGroup variant="link" color="black" spacing="6">
        <DrawerBrowse />
        <Button
          onClick={() => {
            toast({
              position: "top",
              title: "Pricing",
              description: "Everything is free for you",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
          }}>
          PRICING
        </Button>
      </ButtonGroup>
      <Heading ml={[0, 0, 20]}>gettyImages</Heading>
      <ButtonGroup color="black" spacing="4">
        <DrawerBoards />
        <Button
          variant="link"
          onClick={() => {
            toast({
              position: "top",
              title: "Your basket is empty",
              description: "",
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          }}>
          <ChevronRightIcon />
          BASKET
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              position: "top",
              title: "Sign Up not required",
              description: "You're free to browse this site without signing up",
              status: "success",
              duration: 3000,
              isClosable: false,
            });
          }}>
          SIGN IN
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
