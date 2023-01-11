import { Box, HStack, Image, Text, VStack, Pressable } from "native-base";

import photo from "@assets/tenis.png";
import { UserPhoto } from "@components/UserPhoto";
import { NewOrUsed } from "./NewOrUsed";

type Props = {
  title: string;
  amount: number;
  newOrUsed: boolean;
};

function handleOnPress() {
  console.log('Eai meu caro nobre')
}

export function AnnouncementCard({title, amount, newOrUsed}: Props) {
  return (
    <Box w="47.5%" rounded={6} mb={6} mr={5} >
      <Pressable onPress={handleOnPress}>
        <Image
          source={photo}
          h={100}
          w="full"
          resizeMode="contain"
          alt="foto do produto"
          rounded={6}
        />

        <HStack
          position="absolute"
          padding={2}
          justifyContent="space-between"
          w="full"
        >
          <UserPhoto
            size={8}
            alt="photo user"
            borderColor="gray.700"
            src="https://github.com/marlisonmourao.png"
            borderWidth={1}
          />

          {
            newOrUsed ? 
            <NewOrUsed 
              bgColor="blue.700"
            />
           : 
           <NewOrUsed 
           bgColor="gray.200"
         />
          }

        </HStack>
          <VStack>
            <Text fontFamily="body" fontSize="sm" color="gray.200">{title}</Text>
            <Text fontFamily="heading" fontSize="sm" color="gray.100">R$ {amount}</Text>
          </VStack>
      </Pressable>
    </Box>
  );
}
