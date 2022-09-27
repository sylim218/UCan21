import React from 'react';
import {View, Text} from 'react-native';
//import {useState, useEffect} from 'react';
//import Swiper from 'react-native-swiper';
//import BannerSection from '.';
//import {SliderBox} from 'react-native-image-slider-box';

export default function Challenge({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>배너자리</Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>진행중인 챌린지</Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>진행 예정 챌린지</Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>종료한 챌린지</Text>
    </View>
  );
}
