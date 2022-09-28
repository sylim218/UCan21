import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

function Ended ({navigation}){
  <View>
    <Text style={styles.text}>종료한 챌린지</Text>
    <Button style={styles.btn}
      title="전체 보기 >"
      color="transparent"
      onPress={() => navigation.navigate("EndedList")}
    />
  </View>
}

export default Ended;

const styles=StyleSheet.create({
  text : {
    fontSize:26,
  },

  btn : {

  },
});
