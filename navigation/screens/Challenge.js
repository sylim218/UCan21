import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// screens
import BannerSection from './components/BannerSection';

export default function Challenge({navigation}){

  <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <BannerSection style={styles.container}/>
    <Text style={{fontSize:20, fontWeight:'bold'}}>진행중인 챌린지</Text>
    <Upcoming style={{height:200}}/>
    <Ended style={{height:200}}/>
  </View>

}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    alignItems:'center',
    height:80
  }
});
