import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Coffee = ({
  backgroundImageSize,
  title,
  price,
  imgsrc,
  coffeeImageWidth,
  coffeeImageHeight,
}) => {
  const styles = StyleSheet.create({
    coffeeBackgroundImage: {
      width: backgroundImageSize,
      height: backgroundImageSize,
      borderRadius: backgroundImageSize / 2,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
    },
  });
  return (
    <View>
      <View style={styles.coffeeBackgroundImage}>
        <Image
          style={{width: coffeeImageWidth, height: coffeeImageHeight}}
          source={require('OkeyDokeyContest/assets/images/coffee.png')}
        />
      </View>
    </View>
  );
};

export default Coffee;
