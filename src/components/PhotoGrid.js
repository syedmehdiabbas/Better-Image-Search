import React from "react";
import { Image, HStack, Link, Spinner } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function PhotoGrid({ photos }) {
  if (!photos) return <Spinner />;
  return (
    <HStack flexWrap="wrap" spacing="0" justifyContent="center">
      {photos.map((p) => (
        <Link as={RouterLink} to={`/photo/${p.id}`} key={p.id}>
          <Image
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            boxSize="300px"
            boxShadow="inner"
            objectFit="cover"
            alt={p.description}
            src={p.urls.small}></Image>
        </Link>
      ))}
    </HStack>
  );
}

export default PhotoGrid;
