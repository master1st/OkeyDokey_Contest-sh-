import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

const Toggle = ({getEasy}) => {
  const [isToggled, setIsToggled] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    setIsToggled(!isToggled);
    getEasy();
    console.log(isToggled);

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
      <View style={[styles.toggleButton, {width: 300, height: 55}]}>
        <View style={styles.textContainer2}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[
                styles.buttonText,
                isToggled ? styles.buttonTextActive : null,
              ]}>
              쉬운메뉴
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[
                styles.buttonText,
                !isToggled ? styles.buttonTextActive : null,
              ]}>
              일반
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            styles.leftButton,
            isToggled ? styles.buttonActive : null,
          ]}
          activeOpacity={1}
          onPress={handleToggle}
        />
        <Animated.View style={[styles.slideButton, buttonStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  toggleButton: {
    shadowColor: '#000',
    elevation: 4,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 100,
  },
  leftButton: {
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
  },
  rightButton: {
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
  },
  buttonActive: {
    // backgroundColor: 'white',
  },
  textContainer: {
    position: 'absolute',
    left: 50,
    top: 10,
    flexDirection: 'row',
    width: '100%',
    zIndex: 1,
  },
  textContainer2: {
    position: 'absolute',
    left: 180,
    top: 10,
    flexDirection: 'row',
    width: '100%',
    zIndex: 1,
  },
  buttonText: {
    fontFamily: 'Pretendard',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
