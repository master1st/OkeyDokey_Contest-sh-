import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [slideAnimation] = useState(new Animated.Value(0));

  const handleToggle = () => {
    setIsToggled(!isToggled);
    Animated.timing(slideAnimation, {
      toValue: isToggled ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const slideAnimationStyle = {
    transform: [
      {
        translateX: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.circleContainer}>
          <Animated.View style={[styles.circle, slideAnimationStyle]} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <Text style={[styles.buttonText, isToggled ? styles.buttonTextHighlighted : null]}>
            쉬운메뉴
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <Text style={[styles.buttonText, !isToggled ? styles.buttonTextHighlighted : null]}>
            일반메뉴
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 5,
    width: 200,
    height: 40,
  },
  circleContainer: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  buttonTextHighlighted: {
    fontWeight: 'bold',
  },
});

export default ToggleButton;