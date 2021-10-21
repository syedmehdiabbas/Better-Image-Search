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
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

function DrawerBrowse() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant="link">
        <CopyIcon />
        BOARDS
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <VStack alignItems="center">
              <Heading size="md">Create new Board</Heading>
              <Text size="xs">
                Boards are the best place to save images and video clips.
                Collect, curate and comment on your files.
              </Text>
              <Input placeholder="Board Name" />
              <Button w="full" variant="solid" bg="violet">
                CREATE
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerBrowse;
