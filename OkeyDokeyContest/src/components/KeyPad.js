import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const KeyPad = () => {
  return (
    <View>
      <View style={styles.buttonRow}>
        <CustomButton
          margin={3}
          title={'1'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'2'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'3'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
      </View>

      <View style={styles.buttonRow}>
        <CustomButton
          margin={3}
          title={'4'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'5'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'6'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
      </View>

      <View style={styles.buttonRow}>
        <CustomButton
          margin={3}
          title={'7'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'8'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'9'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
      </View>

      <View style={styles.buttonRow}>
        <CustomButton
          margin={3}
          title={''}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#BFBFBF'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'0'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'지우기'}
          onPress={''}
          width={130}
          height={70}
          backgroundColor={'#BFBFBF'}
          textColor={'white'}
          fontSize={25}
        />
      </View>
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
  },
});
