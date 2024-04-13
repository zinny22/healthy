import React from 'react';
import Home from './pages/Home';
import {SafeAreaView, StatusBar} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  // const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
