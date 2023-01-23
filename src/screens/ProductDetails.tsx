import { Header } from "@components/Header";
import { VStack, Image, HStack, Text, Box, Button } from "native-base";

import { UserPhoto } from "@components/UserPhoto";

export function ProductDetails() {
  return(
    <VStack flex={1} px={6} pt={12} bg="gray.600">
      <Header />

      <VStack >
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9yjVrw2fkU0YVMfPlokr-Y6qts9dXG7Z5bMrgakK-ztcEccJcR6n0s2TBUHSGiJ3YEs&usqp=CAU' }}
          alt="product image"
          w="full"
          h={"280px"}
          mt={4}
        />
      </VStack>

      <VStack 
        mt={5} 
        w="full"
        
      >
        <HStack alignItems="center">
          <UserPhoto 
            size={8}
            alt="user photo"
            borderWidth={2}
            source={{ uri: 'https://akamai.sscdn.co/uploadfile/letras/fotos/2/5/7/4/2574f9070ce48b988fe2693a60c40427.jpg'}}
          
          />

          <Text fontFamily="body" fontSize="sm" color="gray.100" pl={2}>
            Marlison Mourão
          </Text>
        </HStack>

        <Box 
          w={"47"}
          h={6}
          bg="gray.500"
          borderRadius="full"
          justifyContent="center"
          alignItems="center"
          mt={6}
        >
          <Text 
            fontFamily="heading"
            fontSize="xs"
            color="gray.200"
          >
            Novo
         </Text>
        </Box>

        <VStack w="full">
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <Text
              fontFamily="heading"
              fontSize="xl"
              color="gray.300"
            >
              Bicicleta
            </Text>
            <Text
              fontFamily="heading"
              fontSize="xl"
              color="blue.400"
            >
              R$ 120,00
            </Text>
          </HStack>

          <VStack mt={2}>
            <Text
              fontFamily="body"
              fontSize="sm"
              color="gray.200"
            >
              Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
            </Text>


            <VStack>
              <Box flexDirection="row">
                <Text fontFamily="heading" fontSize="sm" color="gray.200">Aceita troca?</Text>
                <Text fontFamily="body" fontSize="sm" color="gray.200" pl={3}>Sim</Text>
              </Box>

              <Box mt={4}>
                <Text fontFamily="heading" fontSize="sm" color="gray.200">Meios de pagamento:</Text>
              </Box>

              <Box w="full" flexDirection="row" rounded={2} alignItems="center" justifyContent="space-between">
                <Text fontFamily="heading" fontSize="2xl" color="blue.700">R$ 120,00</Text>
                <Button w={"161px"}>
                  <Text fontFamily="heading" fontSize="sm" color="gray.700">
                    Entrar em contato
                  </Text>
                </Button>

              </Box>

            </VStack>

          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}