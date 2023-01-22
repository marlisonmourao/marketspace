import {
  HStack,
  VStack,
  Text,
  Heading,
  Pressable,
  FlatList,
  Box,
} from "native-base";

import { Plus } from "phosphor-react-native";

import { UserPhoto } from "@components/UserPhoto";
import { Search } from "./Search";
import { AnnouncementCard } from "./Card/AnnouncementCard";
import { useState } from "react";
import { MyAds } from "./MyAds";

export function Home() {
  const [product, setProduct] = useState([
      {
        title: "Tênis vermelho",
        amount: 59.12,
        newOrUsed: true
      },
      {
        title: "Tênis azul",
        amount: 100.10,
        newOrUsed: false
      },
      {
        title: "Tênis amaralho",
        amount: 593.96,
        newOrUsed: true
      },
      {
        title: "Tênis verde",
        amount: 40.92,
        newOrUsed: false
      }
  ])

  return (
    <VStack flex={1} px={6} pt={12} bg="gray.600">
      <VStack>
        <HStack justifyContent="space-between">
          <HStack>
            <UserPhoto
              size={45}
              borderColor="blue.400"
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
            w={130}
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
        <Text fontFamily="body" fontSize="sm" color="gray.300">
          Seus produtos anunciados para venda
        </Text>

        <MyAds />

      </VStack>

      <VStack mt={8}>
        <Text fontFamily="body" fontSize="sm" color="gray.300" mb={3}>
          Compre produtos variados
        </Text>

        <Search />

        <VStack mt={6}>
          <FlatList
            data={product}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => (
                <AnnouncementCard 
                  title={item.title}
                  amount={item.amount}
                  newOrUsed={item.newOrUsed} 
                  
                />
            )}
            _contentContainerStyle={{
              paddingBottom: 8
            }}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
