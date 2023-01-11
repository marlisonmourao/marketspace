import { HStack, VStack, Text, Heading } from "native-base";

import { Tag, ArrowRight } from "phosphor-react-native"

export function MyAds() {
  return (
    <HStack
      bg="blue.100"
      alignItems="center"
      justifyContent="space-between"
      p={3}
      rounded={6}
      mt={3}
    >
      <HStack alignItems="center">
        <Tag color="#364D9D" size={19} />

        <VStack px={4}>
          <Text fontFamily="heading" fontSize="xl" color="gray.200">
            4
          </Text>

          <Text fontFamily="body" fontSize="xs" color="gray.200">
            anúncios ativos
          </Text>
        </VStack>
      </HStack>

      <HStack alignItems="center" justify-content="center">
        <Heading fontFamily="heading" fontSize="xs" color="blue.700" right={3}>
          Meus anúncios
        </Heading>

        <ArrowRight color="#647AC7" />
      </HStack>
    </HStack>
  );
}
