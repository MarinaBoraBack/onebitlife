import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";

const Stack = createNativeStackNavigator();

export default function AllPages () {
 return (
    <NavigationContainer>
     <Stack.Navigator 
        screenOption={{
         headerShown: false.
        }}
      >
        <Stack.Screen name="Star" component={Start} />
     </Stack.Navigator>
    </NavigationContainer>
 );
}
