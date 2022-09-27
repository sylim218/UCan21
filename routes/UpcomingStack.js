import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Challenge from '../navigation/screens/Challenge';
import UpcomingList from '../navigation/screens/components/UpcomingList';

const Stack=createStackNavigator();

export default function UpcomingStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="챌린지" component={Challenge}/>
      <Stack.Screen name="진행 예정 챌린지" componenet={UpcomingList}/>
    </Stack.Navigator>
  );
}
