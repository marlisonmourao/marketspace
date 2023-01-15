import { Heading, HStack, Pressable } from "native-base";
import { XCircle } from "phosphor-react-native";

type Props = {
  isActive: boolean;
  setIsActive(value: boolean): void;
}

export function Condition({isActive, setIsActive}: Props) {
  return (
    <Pressable
      onPress={() => setIsActive(!isActive)}
      borderRadius="full"
      bg="gray.500"
      w={17}
      h={8}
      isPressed={isActive}
      alignItems="center"
      justifyContent="center"
      _pressed={{
        bg: "blue.400",
      }}
    >
      <HStack alignItems="center" w="full" justifyContent="center">
        <Heading
          color={isActive ? "white" : "gray.300"}
          fontFamily="heading"
          fontSize="xs"
        >
          {
            isActive ? "NOVO" : "USADO"
          }
        </Heading>

        {isActive && (
          <Pressable paddingLeft={1}>
            <XCircle size={18} color="white" />
          </Pressable>
        )}
      </HStack>
    </Pressable>
  );
}
