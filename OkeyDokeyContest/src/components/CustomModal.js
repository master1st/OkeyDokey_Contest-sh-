import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomModal = ({width, height}) => {
  return (
    <View style={{width: 100, height: 100}}>
      <View style={styles.header}>
        <Text>CustomModal</Text>
      </View>
      <Text>CustomModal</Text>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F7FB',
  },
});
