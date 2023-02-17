import { Box, HStack, IconButton, Text } from 'native-base';

import { ArrowLeft } from 'phosphor-react-native'

export function Header() {
  return(
    <HStack w="full" alignItems="center" justifyContent="space-between">
      <ArrowLeft 
        size={24}
        color="#1A181B"
      />

        <Text>Criar anúncio</Text>

        <Text></Text>
    </HStack>
  )
}