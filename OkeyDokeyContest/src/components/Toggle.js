import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

const Toggle = ({
  getEasy,
  QcoffeeSet,
  navigationQcoffee,
  whereScreen,
  CoffeeScreen,
  settingEasy,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(`색깔 : ${isToggled}`);
  }, [isToggled]);

  useEffect(() => {
    if (whereScreen === 'QCoffee' && !isToggled) {
      Animated.timing(slideAnimation, {
        toValue: isToggled ? 0 : 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    } else if (whereScreen === 'Qmilk' && !isToggled) {
      Animated.timing(slideAnimation, {
        toValue: isToggled ? 0 : 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [isToggled]);

  const handleToggle = () => {
    if (whereScreen === 'QCoffee' && !isToggled) {
      navigationQcoffee();
    } else if (whereScreen === 'Qmilk' && !isToggled) {
      navigationQcoffee();
    }
    getEasy();
    //   if(CoffeeScreen !== '커피'){
    //   Animated.timing(slideAnimation, {
    //     toValue: isToggled ? 0 : 1,
    //     duration: 600,
    //     useNativeDriver: true,
    //   }).start();
    // }
    setIsToggled(!isToggled);
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
            {whereScreen === 'QCoffee' || whereScreen === 'Qmilk' ? (
               <Text
               style={[
                 styles.buttonText,
                 isToggled ? styles.buttonTextActive : styles.buttonTextWhite,
               ]}>
               일반
             </Text>
            ) : (
              <Text style={[styles.buttonText, styles.buttonTextActive]}>일반</Text>
            )}
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {whereScreen === 'QCoffee' || whereScreen === 'Qmilk' ? (
            <Text
            style={[
              styles.buttonText,
              !isToggled ? styles.buttonTextActive : styles.buttonTextWhite,
            ]}>
            쉬운메뉴
          </Text>
          ) : (
          <Text style={[styles.buttonText, styles.buttonTextWhite]}>쉬운메뉴</Text>
            )}
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
    left: 30,
    top: 10,
    flexDirection: 'row',
    width: '100%',
    zIndex: 1,
  },
  textContainer2: {
    position: 'absolute',
    left: 200,
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
    color: 'black',
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
  buttonTextWhite: {
    color: 'white',
  },
});

export default Toggle;
