import React from "react";
import { GridItem, Box, Image } from "@chakra-ui/react";

function PhotoGridItem({ cs = 1, rs = 1, id = 1, size = 350 }) {
  let url1 = "https://picsum.photos/id/";
  return (
    <GridItem colSpan={[1, 1, cs]} rowSpan={[1, 1, rs]}>
      <Box>
        <Image
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.01)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          src={url1 + id + "/" + size}
        />
      </Box>
    </GridItem>
  );
}

export default PhotoGridItem;
