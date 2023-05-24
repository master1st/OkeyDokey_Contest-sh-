import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  width: ${props => props.width || 200}px;
  height: ${props => props.height || 50}px;
  background-color: ${props => props.backgroundColor || '#eaeaea'};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${props => props.color || '#ffffff'};
  font-size: ${props => props.fontSize || 16}px;
`;

const CustomButton = ({ title, onPress, width, height, backgroundColor, textColor, fontSize }) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <ButtonText color={textColor} fontSize={fontSize}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

export default CustomButton;