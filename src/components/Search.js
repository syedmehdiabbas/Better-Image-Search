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
        my={16}
        px={5}
        direction="row"
        py={2}
        boxShadow="dark-lg"
        borderRadius="md"
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
