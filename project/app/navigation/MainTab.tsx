import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import ExerciseScreen from '../screens/ExerciseScreen';
import FoodScreen from '../screens/FoodScreen';
import HomeScreen from '../screens/HomeScreen';
import MyPageScreen from '../screens/MyPageScreen';
import {color} from '../styles/color';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: color.main, // 활성화된 탭 아이콘 및 텍스트 색상
        tabBarInactiveTintColor: color.sub, // 비활성화된 탭 아이콘 및 텍스트 색상
        tabBarStyle: {
          backgroundColor: '#ffffff', // 탭 바 배경색
          borderTopColor: '#e0e0e0', // 탭 바 상단의 테두리 색상
          height: 100, // 탭 바의 높이
        },
        tabBarLabelStyle: {
          fontSize: 12, // 탭 텍스트 크기
          paddingBottom: 26,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="음식"
        component={FoodScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{width: 40, height: 40, backgroundColor: '#D9D9D9'}} />
          ),
        }}
      />
      <Tab.Screen
        name="운동"
        component={ExerciseScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{width: 40, height: 40, backgroundColor: '#D9D9D9'}} />
          ),
        }}
      />

      <Tab.Screen
        name="홈"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{width: 40, height: 40, backgroundColor: '#D9D9D9'}} />
          ),
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{width: 40, height: 40, backgroundColor: '#D9D9D9'}} />
          ),
        }}
      />
      <Tab.Screen
        name="내체질"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{width: 40, height: 40, backgroundColor: '#D9D9D9'}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
