import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from '../navigation/MainContainer';
import Navigator1 from '../routes/UpcomingStack';
import Navigator2 from '../routes/EndedStack';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

function App() {
  return(
    <NavigationContainer>
      <Navigator1/>
      <Navigator2/>
      <MainContainer/>
    </NavigationContainer>

  );
}

export default App;
