import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import Detail from '../components/Pages/Detail';

function RootStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default RootStack;
