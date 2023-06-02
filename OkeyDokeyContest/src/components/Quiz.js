import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Quiz = ({QuizText, handleEvent, height, marginBottom}) => {
  const styles = StyleSheet.create({
    left: {
        backgroundColor:'white',
        height: height,
        flex: 1,   
        marginHorizontal: 10,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    
        elevation: 3,
        marginTop:marginBottom,
      },
});

  return (
      <TouchableOpacity onPress={handleEvent} style={styles.left}>
        <Text style={{fontSize: 40, color:'black', fontWeight:'bold', textAlign: 'center', fontFamily: 'Pretendard'}}>{QuizText}</Text>
      </TouchableOpacity>
  );
};

export default Quiz;

