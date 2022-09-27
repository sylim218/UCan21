import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Challenge from '../navigation/screens/Challenge';
import EndedList from '../navigation/screens/components/EndedList';

const Stack=createStackNavigator();

export default function UpcomingStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="챌린지" component={Challenge}/>
      <Stack.Screen name="완료된 챌린지" componenet={EndedList}/>
    </Stack.Navigator>
  );
}
