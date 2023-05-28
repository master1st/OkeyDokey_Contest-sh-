import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    setIsToggled(!isToggled);
    Animated.timing(slideAnimation, {
      toValue: isToggled ? 0 : 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyle = {
    transform: [
      {
        translateX: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 150],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={[styles.toggleButton, { width: 300, height: 50 }]}>
      <Animated.View style={[styles.slideButton, buttonStyle]} />
        <TouchableOpacity
          style={[styles.button, styles.leftButton,isToggled ? styles.buttonActive : null]}
          activeOpacity={1}
          onPress={handleToggle}
        >
          <Text style={[styles.buttonText, !isToggled ? styles.buttonTextActive : null]}>일반</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rightButton, !isToggled ? styles.buttonActive : null]}
          activeOpacity={1}
          onPress={handleToggle}
        >
          <Text style={[styles.buttonText , isToggled ? styles.buttonTextActive : null]}>쉬운메뉴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  toggleButton: {
    shadowColor: "#000",
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftButton: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonActive: {
    backgroundColor: 'white',
    
  },
  buttonText: {
    // color: 'white',
    fontFamily:'Pretendard',
    fontWeight:'bold',
    fontSize: 16,
  },
  buttonTextActive: {
     color: 'white',
  },
  slideButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 20,
    elevation: 1,
  },
});

export default Toggle;