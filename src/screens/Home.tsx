import { UserPhoto } from "@components/UserPhoto";
import { HStack, VStack, Text, Heading } from "native-base";

export function Home() {
  return (
    <VStack flex={1} px={6} py={9} bg="gray.600">
      <VStack>
        <HStack>
          <UserPhoto size={45} alt="User Photo" />
          <VStack px={3}>
            <Text
              fontFamily="body"
              fontSize="md"
              color="gray.100"
            >
              Boas vindas,
            </Text>
            <Heading
              fontFamily="heading"
              fontSize="md"
              color="gray.100"
            >
              Marlison Mourão!
            </Heading>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
