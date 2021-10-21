import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import PhotoGridItem from "./PhotoGridItem";

function PhotoGrid2() {
  return (
    <SimpleGrid columns={[1, 2, 4]}>
      {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(
        (i) => {
          let id = Math.floor(Math.random() * 100);
          console.log(id);
          return <PhotoGridItem key={i} id={id} />;
        }
      )}
    </SimpleGrid>
  );
}

export default PhotoGrid2;
