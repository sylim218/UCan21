import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, FlatList, Pressable} from 'react-native';
//import Item_ingList from './card';
//import {ChallengeItem} from './ChallengeItem'

/*const PressableItem=({item}:{item:ChallengeItem}) => {
  return(
    <Pressable onPress={()=>alert('Pressed: ${item.name}')}>
      <Item_ingList item={item}/>
    </Pressable>
  )
}*/


function Challege_ing(){
  <View>
    <Text style={styles.text}>진행중인 챌린지</Text>
    /*<FlatList data={challegeData as ChallengeItem[]}
              renderItem={PressableItem}
              keyExtractor={(item) => item.name}
              horizontal={true}
    />*/
  </View>
}
export default Challege_ing;

const styles=StyleSheet.create({
  text : {
    fontSize:26,
  },

  participant : {

  },

  state : {

  },

  tag : {

  },
});
