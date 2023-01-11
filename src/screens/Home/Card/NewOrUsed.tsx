import { Box, Text } from "native-base";

type Props = {
  bgColor: string;
}

export function NewOrUsed({bgColor}: Props) {
  return (
    <Box
      bg={bgColor}
      w="50px"
      h="24px"
      rounded="full"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontFamily="heading" fontSize="xs" color="white.100">
        NOVO
      </Text>
    </Box>
  );
}
