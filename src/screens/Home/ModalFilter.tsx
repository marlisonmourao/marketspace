import { useState, useRef } from 'react'

import { Button, FormControl, HStack, Input, Modal } from "native-base";

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export function ModalFilter({modalVisible, setModalVisible}: Props) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return <>
      <Modal isOpen={modalVisible} flex={1} justifyContent="flex-end" onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content  w="full">
          <Modal.CloseButton />
          <Modal.Header>Contact </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      
      {/* <HStack space="4" justifyContent="center" alignItems="center">
        <Button onPress={() => {
        setModalVisible(!modalVisible);
      }}>
          Open Modal
        </Button>
        <Input w="32" ref={finalRef} placeholder="Enter the OTP" _light={{
        placeholderTextColor: "blueGray.700"
      }} _dark={{
        placeholderTextColor: "blueGray.100"
      }} />
      </HStack> */}
    </>;
}

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto"
  },
  left: {
    marginLeft: 0,
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
};