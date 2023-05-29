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
  margin,
  borderRadius,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: margin,
        borderRadius: borderRadius,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: textColor,
          fontSize: fontSize,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Pretendard',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
