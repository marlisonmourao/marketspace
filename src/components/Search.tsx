import { Box, Input, Divider, HStack } from "native-base";
import { MagnifyingGlass, Faders } from "phosphor-react-native";
import { Pressable } from "react-native";

export function Search() {

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

            <Pressable>
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
    </Box>
  );
}
