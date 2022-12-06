import { Eye } from "phosphor-react-native";
import { Input as NativeInput, IInputProps, HStack, Box } from "native-base";
import { TouchableOpacity } from "react-native";

type Props = IInputProps & {};

export function Input({ ...rest }: Props) {
  return (
    <Box
      alignItems="center"
      w="full"
      flexDirection="row"
      bgColor="gray.700"
      mb={4}
      borderRadius={6}
    >
      <NativeInput
        h={14}
        w="full"
        py={3}
        borderWidth={0}
        px={4}
        placeholderTextColor="gray.400"
        fontSize="sm"
        fontFamily="body"
        _focus={{
          borderWidth: 1,
          borderColor: "gray.200"
        }}
        {...rest}
      />

      <TouchableOpacity style={{ position: 'absolute', right: 12 }}>
        <Eye color="#5F5B62" size={23} />
      </TouchableOpacity>
    </Box>
  );
}
