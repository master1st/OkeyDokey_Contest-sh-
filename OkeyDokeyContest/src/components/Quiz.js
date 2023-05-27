import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View>
      <TouchableOpacity onPress={handleHere} style={styles.left}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>매장에서 먹기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
