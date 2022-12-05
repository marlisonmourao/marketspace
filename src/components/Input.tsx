import { Input as NativeInput, IInputProps } from 'native-base'

type Props = IInputProps & {

}

export function Input({...rest}: Props) {
  return(
    <NativeInput 
      bgColor="gray.700"
      h={14}
      py={3}
      px={4}
      borderWidth={0}
      borderRadius={6}
      placeholderTextColor="gray.400"
      fontSize="sm"
      fontFamily="body"
      _focus={{
        borderWidth: 1,
        borderColor: 'gray.200'
      }}
      {...rest}
    /> 
  )
}