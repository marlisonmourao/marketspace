import { useState, useRef } from 'react'

import { Button, Text, Modal, HStack, IconButton, Pressable, IPressableProps, Center, Heading } from "native-base";
import { XCircle } from 'phosphor-react-native';

type Props  = IPressableProps & {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export function ModalFilter({modalVisible, setModalVisible}: Props) {
  const [isActive, setIsActive] = useState(false)

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return <>
      <Modal isOpen={modalVisible} flex={1} justifyContent="flex-end" onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content  w="full">
          <Modal.CloseButton />
          <Modal.Header>
            <Text
              fontFamily="heading"
              color="gray.100"  
              fontSize="xl"
            >
              Filtrar anúncios
            </Text>
          </Modal.Header>
          <Modal.Body>

            <Text
              fontFamily="heading"
              color="gray.200"  
              fontSize="md"
            >
             Condição
            </Text>

            <HStack>
              <Pressable 
                onPress={() => setIsActive(!isActive)}
                borderRadius="full"
                bg='gray.500'
                w={17}
                h={8}
                isPressed={isActive}
                alignItems="center"
                justifyContent="center"
                _pressed={{
                  bg: 'blue.400'
                }}
              >

                <HStack alignItems="center" w="full" justifyContent="center">
                  <Heading
                    color={isActive ? 'white' : 'gray.300'} 
                    fontFamily="heading"
                    fontSize="xs" 
                  >
                    NOVO
                  </Heading>

                  {
                    isActive && 
                    <Pressable paddingLeft={1}>
                      <XCircle size={18} color="white"/>
                    </Pressable>
                  }
                </HStack>
              </Pressable>
            </HStack>

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

    </>;
}
