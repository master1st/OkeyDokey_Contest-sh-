import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Quiz = ({ title, onPress, width, height, backgroundColor, textColor, fontSize }) => {
  return (
    <View>
      <TouchableOpacity onPress={handleHere} style={styles.left}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>매장에서 먹기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
    left: {
        height: '60%',
        marginLeft: 30,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        marginRight: 5,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    
        elevation: 3,
      },
});
