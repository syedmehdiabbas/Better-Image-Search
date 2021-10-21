import React from "react";
import { Grid } from "@chakra-ui/react";
import PhotoGridItem from "./PhotoGridItem";

function PhotoGrid() {
  return (
    <Grid
      templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
      templateRows={["repeat(9,1fr)", "repeat(5,1fr)", "repeat(3,1fr)"]}>
      <PhotoGridItem cs={2} rs={2} id={12} size={700} />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        let id = Math.floor(Math.random() * 100);
        console.log(id);
        return <PhotoGridItem key={i} id={id} />;
      })}
    </Grid>
  );
}

export default PhotoGrid;
