import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

function Upcoming ({navigation}){
  return (
    <View>
      <Text style={styles.text}>진행 예정 챌린지</Text>
      <Button
        title="전체 보기 >"
        color="transparent"
        onPress={() => navigation.navigate("UpcomingList")}
      />
    </View>
  );
}

export default Upcoming;

const styles=StyleSheet.create({
  text : {
    fontSize:26,
  },
});
