import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from '../navigation/MainContainer';
import Navigator from '../routes/ChallengeStack';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

function App() {
  return(
    /*<div>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
      <MainContainer/>
    </div>*/
    <MainContainer/>


  );
}

export default App;
