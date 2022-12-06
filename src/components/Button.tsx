import { Button as NativeButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'base'

}

export function Button({title, variant = 'base', ...rest}: Props) {
  return(
    <NativeButton 
      w="full"
      h={14}
      borderRadius={6}
      bg={variant === 'base' ? 'gray.500' : variant === 'primary' ? 'blue.400' : 'gray.100'}

      _pressed={{
        bg: variant === 'base'? 'gray.400' : variant === 'primary'? 'blue.700' : 'gray.200',
      }}
      {...rest}
    >
     <Text
      color={variant === 'base' ? 'gray.200' : 'gray.700'}
      fontFamily="heading"
      fontSize="sm"
     >
      {title}
     </Text>
    </NativeButton>
  )
}