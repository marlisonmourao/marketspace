import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "@routes/auth.routes";

export function Routes() {
  return (
    <Box flex={1} bg="gray.600">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
