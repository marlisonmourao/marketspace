import { useState } from "react";
import { Box, Input, Divider, HStack, Pressable } from "native-base";
import { MagnifyingGlass, Faders } from "phosphor-react-native";

import { ModalFilter } from './ModalFilter';

export function Search() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Box bg="gray.700">
      <Input
        padding={4}
        rounded={6}
        rightElement={
          <HStack alignItems="center" right={3}>
            <Pressable>
              <MagnifyingGlass color="#3E3A40"  />
            </Pressable>

            <Divider
              bg="gray.400"
              thickness="1"
              mx="2"
              orientation="vertical"
              h={19}
            />

            <Pressable onPress={() => setModalIsVisible(!modalIsVisible)}>
              <Faders color="#3E3A40" />
            </Pressable>
          </HStack>
        }
        borderWidth={0}
        placeholder="Buscar anúncio"
        placeholderTextColor="gray.400"
        fontSize="md"
        fontFamily="body"
      />

      <ModalFilter 
        modalVisible={modalIsVisible}
        setModalVisible={setModalIsVisible}
      />
    </Box>
  );
}
