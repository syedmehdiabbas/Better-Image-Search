import React from "react";
import { Button } from "@chakra-ui/react";

function CategoryButton({ category }) {
  return (
    <Button
      onMouseEnter={(e) => {
        e.target.style.textDecoration = "underline";
        e.target.style.backgroundColor = "white";
      }}
      onMouseLeave={(e) => (e.target.style.textDecoration = "none")}>
      {category}
    </Button>
  );
}

export default CategoryButton;
