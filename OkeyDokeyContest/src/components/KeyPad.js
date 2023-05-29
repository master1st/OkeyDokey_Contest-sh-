import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const KeyPad = ({onNumberPress, onDeletePress}) => {
  const handleNumberPress = number => {
    onNumberPress(number);
  };

  const handleDeletePress = () => {
    onDeletePress();
  };

  return (
    <View>
      <View style={styles.buttonRow}>
        <CustomButton
          margin={3}
          title={'1'}
          onPress={() => handleNumberPress('1')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'2'}
          onPress={() => handleNumberPress('2')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'3'}
          onPress={() => handleNumberPress('3')}
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
          onPress={() => handleNumberPress('4')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'5'}
          onPress={() => handleNumberPress('5')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'6'}
          onPress={() => handleNumberPress('6')}
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
          onPress={() => handleNumberPress('7')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'8'}
          onPress={() => handleNumberPress('8')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'9'}
          onPress={() => handleNumberPress('9')}
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
          title={'010'}
          onPress={() => handleNumberPress('010')}
          width={130}
          height={70}
          backgroundColor={'#BFBFBF'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'0'}
          onPress={() => handleNumberPress('0')}
          width={130}
          height={70}
          backgroundColor={'#056CF2'}
          textColor={'white'}
          fontSize={30}
        />
        <CustomButton
          margin={3}
          title={'지우기'}
          onPress={() => handleDeletePress()}
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
