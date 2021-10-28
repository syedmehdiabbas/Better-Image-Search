import React from "react";
import { HStack, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, ArrowBackIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <HStack py={4} justifyContent="space-between" px={8}>
      <Link as={RouterLink} to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>
      <Heading>freeImages</Heading>
      <MoonIcon />
    </HStack>
  );
}

export default Navbar;
