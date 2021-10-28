import React from "react";
import { Stack, Button, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search({ handleSearch, searchInput, setSearchInput }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}>
      <Stack
        my={8}
        px={5}
        direction="row"
        py={2}
        boxShadow="2xl"
        borderRadius="md"
        bg="white"
        spacing={5}>
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          border="none"
          placeholder="Search Images"
        />
        <Button
          variant="ghost"
          onClick={() => {
            handleSearch();
          }}>
          <SearchIcon />
        </Button>
      </Stack>
    </form>
  );
}

export default Search;
