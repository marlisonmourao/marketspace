import { Image, Heading, Text } from "native-base";

import logo from "@assets/logo.png";

type Props = {
  title: string;
  subTitle: string;
  imgSize?: boolean;
}

export function Logo({title, subTitle, imgSize}: Props) {
  return (
    <>
      <Image 
        source={logo} 
        alt="Logo" mb={17}
        w={imgSize ? 16 : 24}
        h={imgSize? 10 : 16}
      />

      <Heading fontSize="3xl" fontFamily="heading">
        {title}
      </Heading>

      <Text 
        fontFamily="body" 
        fontSize={imgSize ? 'sm' : '2xl'} 
        lineHeight="md"
        textAlign="center"
        mt={imgSize ? 2 : 0}
      >
        {subTitle}
      </Text>
    </>
  );
}
