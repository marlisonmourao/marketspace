import {
  ScrollView,
  VStack,
  Text,
  Center,
  Box,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Logo } from '@components/Logo';

export function Signin() {

  const navigate = useNavigation<AuthNavigatorRoutesProps>()

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} bg="gray.600">
        <Center my={16}>
          <Logo
            title="marketspace"
            subTitle="Seu espaço de compra e venda"
          />
        </Center>

        <Center px={12} mb={4}>
          <Text color="gray.200" fontFamily="body" fontSize="sm">
            Acesse sua conta
          </Text>
        </Center>

        <Box  mb={8}>
          <Input placeholder="E-mail" />

          <Input placeholder="Senha" securityText mt={4}/>
        </Box>

        <Button title="Entrar" variant="primary" />

        <Center mt={32}>
          <Text color="gray.200" fontSize="sm" fontFamily="body" mb={4}>
            Ainda não tem acesso?
          </Text>

          <Button 
            title="Criar uma conta"
            onPress={() => navigate.navigate('signUp')}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
