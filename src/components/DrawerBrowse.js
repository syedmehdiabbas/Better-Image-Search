import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerBrowse() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
        BROWSE
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <VStack>
              <Button size="xl" variant="link">
                CREATIVE
              </Button>
              <Button size="xl" variant="link">
                EDITORIAL
              </Button>
              <Button size="xl" variant="link">
                VIDEO
              </Button>
              <Button size="xl" variant="link">
                MUSIC
              </Button>
              <Button size="xl" variant="link">
                BLOG
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerBrowse;
