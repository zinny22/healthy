import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Exercise from '../components/Pages/Exercise';
import Home from '../components/Pages/Home';
import Food from '../components/Pages/Food';
import MyPage from '../components/Pages/Mypage';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MainTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name="운동"
        component={Exercise}
        options={{
          tabBarIcon: () => <Icon name="health-and-safety" size={32} />,
        }}
      />
      <Tab.Screen
        name="음식"
        component={Food}
        options={{
          tabBarIcon: () => <Icon name="food-bank" size={32} />,
        }}
      />
      <Tab.Screen
        name="내체질"
        component={MyPage}
        options={{
          tabBarIcon: () => <Icon name="book" size={32} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
