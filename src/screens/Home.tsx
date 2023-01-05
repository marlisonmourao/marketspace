import { HStack, VStack, Text, Heading, Pressable } from "native-base";

import { Plus, Tag, ArrowRight } from "phosphor-react-native";

import { UserPhoto } from "@components/UserPhoto";
import { Search } from "@components/Search";

export function Home() {
  return (
    <VStack flex={1} px={6} py={12} bg="gray.600">
      <VStack>
        <HStack justifyContent="space-between">
          <HStack>
            <UserPhoto 
              size={45} 
              src="https://cdn.ome.lt/_KCIIW0hHAX2AJ5vSLtP_E1VgOM=/1200x630/smart/extras/conteudos/naruto_sDnBH1k.png" 
              alt="User Photo" 
            />
            <VStack px={3}>
              <Text fontFamily="body" fontSize="md" color="gray.100">
                Boas vindas,
              </Text>
              <Heading fontFamily="heading" fontSize="md" color="gray.100">
                Marlison Mourão!
              </Heading>
            </VStack>
          </HStack>

          <Pressable
            flexDirection="row"
            w={139}
            h={42}
            bg="gray.100"
            alignItems="center"
            justifyContent="center"
            rounded={6}
          >
            <Plus color="#FFFFFF" />
            <Text color="gray.700" fontFamily="heading" fontSize="sm" px={2}>
              Criar anúncio
            </Text>
          </Pressable>
        </HStack>
      </VStack>

      <VStack mt={8}>
        <Text 
          fontFamily="body" 
          fontSize="sm" 
          color="gray.300"
        >
          Seus produtos anunciados para venda
        </Text>

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
            <Heading
              fontFamily="heading"
              fontSize="xs"
              color="blue.700"
              right={3}
            >
            Meus anúncios
            </Heading>

            <ArrowRight
              color="#647AC7"
            />
          </HStack>
        </HStack>
      </VStack>

      <VStack mt={8}>
        <Text
          fontFamily="body"
          fontSize="sm"
          color="gray.300"
          mb={3}
        >
          Compre produtos variados
        </Text>

        <Search />
      </VStack>

      
    </VStack>
  );
}
