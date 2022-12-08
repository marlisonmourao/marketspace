import { Logo } from "@components/Logo";
import { Center, Text, ScrollView, VStack } from "native-base";

import { UserPhoto } from "@components/UserPhoto";

import userDefault from "@assets/userDefault.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} bg="gray.600">
        <Center mt={16}>
          <Logo
            title="Boas vindas!"
            subTitle={`Crie sua conta e use o espaço para comprar ${"\n"} itens variados e vender seus produtos`}
            imgSize
          />
        </Center>

        <Center mt={8}>
          <UserPhoto size={24} alt="Image user" source={userDefault} />
        </Center>

        <VStack mt={4} mb={6}>
          <Input placeholder="Nome" />

          <Input placeholder="E-mail" />

          <Input placeholder="Telefone" />

          <Input placeholder="Senha"
           securityText
          />

          <Input placeholder="Confirma senha"
           securityText
          />
        </VStack>

        <Button title="Criar" variant="secondary" />

        <Center mt={12} pb={6}>
          <Text color="gray.200" fontSize="sm" fontFamily="body" mb={4}>
            Já tem uma conta?
          </Text>

          <Button title="Ir para o login" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
