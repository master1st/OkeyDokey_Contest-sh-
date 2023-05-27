import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = ({
  title,
  onPress,
  width,
  height,
  backgroundColor,
  textColor,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        justifyContent:'center',
        alignItems:'center',
      }}
      onPress={onPress}>
      <Text style={{
        color: textColor,
        fontSize: fontSize,
        textAlign: 'center',
        }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
