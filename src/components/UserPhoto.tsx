import { Image, IImageProps } from 'native-base'

type Props = IImageProps & {
  size: number;
  borderColor?: string;
  borderWidth?: number;
}

export function UserPhoto({ size, borderColor = "blue.400", borderWidth = 3, ...rest }: Props) {
  return(
    <Image 
      w={size}
      h={size}
      rounded="full"
      borderWidth={borderWidth}
      resizeMode="cover"
      borderColor={borderColor}
      {...rest}
    />
  )
}