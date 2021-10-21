import React from "react";
import {
  Stack,
  Button,
  Input,
  Select,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon, ArrowRightIcon } from "@chakra-ui/icons";

function Search() {
  const toast = useToast();
  return (
    <Stack
      px={5}
      direction="row"
      maxW="100%"
      py={2}
      border="1px solid black"
      bg="white"
      spacing={5}>
      <Button
        variant="ghost"
        onClick={() => {
          toast({
            position: "top",
            title: "Search functionality coming soon",
            description:
              "In the next iteration of this project, I will add search using unsplash api",
            status: "info",
            duration: 6000,
            isClosable: true,
          });
        }}>
        <SearchIcon />
      </Button>
      <Input
        border="none"
        placeholder="Discover world's best photos and images, free"
      />
      <Select placeholder="Images" width="xs">
        <option value="Creative">Creative</option>
        <option value="Editorial">Editorial</option>
      </Select>
      <Button
        variant="ghost"
        onClick={() => {
          toast({
            position: "top",
            title: "Search functionality coming soon",
            description:
              "In the next iteration of this project, I will add search using unsplash api",
            status: "info",
            duration: 6000,
            isClosable: true,
          });
        }}>
        <VStack>
          <ArrowRightIcon w={2} h={2} />
          <Text color="gray.500" fontSize="xs">
            Image Search
          </Text>
        </VStack>
      </Button>
    </Stack>
  );
}

export default Search;
