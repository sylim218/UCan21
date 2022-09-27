import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Challenge from './screens/Challenge';
import Verify_Challenge from './screens/Verify_Challenge';
import Store from './screens/Store';
import MyPage from './screens/MyPage';

// Screen names
const challengeName="챌린지";
const verifyName="챌린지인증";
const storeName="스토어";
const mypageName="마이페이지";

const Tab=createBottomTabNavigator();

function MainContainer(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={challengeName} // 유진 : style 추가
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === challengeName) {
              iconName = focused ? 'challenge' : 'challenge-outline';

            } else if (rn === verifyName) {
              iconName = focused ? 'verify' : 'verify-outline';

            } else if (rn === storeName) {
              iconName = focused ? 'store' : 'store-outline';

            } else if (rn===mypageName){
              iconName=focused ? 'mypage' : 'mypage-outline';
            }

            // 유진 : 아이콘 추가
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={challengeName} component={Challenge} />
        <Tab.Screen name={verifyName} component={Verify_Challenge} />
        <Tab.Screen name={storeName} component={Store} />
        <Tab.Screen name={mypageName} component={MyPage} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
