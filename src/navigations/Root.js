import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../common/routes";
import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";

const stack = createNativeStackNavigator();

const Root = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: "Users",
          headerTitleAlign: "center",
          headerTintColor:'#fff',
          headerStyle: {backgroundColor:'#0f0f11'},
          
        }}
      ></stack.Screen>
      <stack.Screen
        name={routes.profile}
        component={UserDetails}
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          headerTintColor:'#fff',
          headerStyle: {backgroundColor:'#0f0f11'},
        }}
      ></stack.Screen>
    </stack.Navigator>
  );
};

export default Root;
