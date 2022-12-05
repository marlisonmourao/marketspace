import { ScrollView, VStack, Text, Center, Image, Heading } from 'native-base'

import logo from '@assets/logo.png'

import { Input } from '@components/Input'


export function Signin() {
  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} bg='gray.600'>
        <Center my={16}>
          <Image 
            source={logo}
            alt='Logo'
            mb={17}
          />

          <Heading fontSize="3xl" fontFamily="heading">
            marketspace
          </Heading>

          <Text fontFamily="body" fontSize="2xl" lineHeight='md'>
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Center px={12} mb={4}>
          <Text color="gray.200" fontFamily="body" fontSize="sm">
            Acesse sua conta
          </Text>
        </Center>

        <Input
          placeholder='E-mail'
        />

        <Input
          placeholder='Senha'
          secureTextEntry
          mt={4}
        />

      </VStack>
    </ScrollView>
  )
}