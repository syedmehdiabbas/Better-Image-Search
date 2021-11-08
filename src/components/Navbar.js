import React from "react";
import {
  Button,
  IconButton,
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Navbar({ homeLoad }) {
  const { colorMode, toggleColorMode } = useColorMode();
  let icon = <MoonIcon />;
  if (colorMode === "dark") icon = <SunIcon />;

  return (
    <HStack py={4} justifyContent="space-between" px={8}>
      <Button onClick={homeLoad} variant="ghost">
        <Link as={RouterLink} to="/">
          Home
        </Link>
      </Button>
      <IconButton onClick={toggleColorMode}>{icon}</IconButton>
    </HStack>
  );
}

export default Navbar;
