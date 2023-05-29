import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardImg}>
        <Image
          style={{width: 150, height: 100}}
          source={require('OkeyDokeyContest/assets/images/card.png')}
        />
      </View>
      <View style={styles.outlineBox}>
        <View style={styles.grayBox}></View>
        <View style={styles.redBox}></View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardView: {
    margin: 30,
  },
  outlineBox: {
    width: 275,
    height: 125,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  redBox: {
    position: 'absolute',
    width: '100%',
    height: 55,
    backgroundColor: '#F25D07',
    marginTop: 45,
  },
  grayBox: {
    zIndex: 1,
    width: '70%',
    height: 55,
    backgroundColor: '#595959',
    top: '25%',
    borderRadius: 10,
  },
  cardImg: {
    position: 'absolute',
    zIndex: 2,
    marginVertical: 50,
    marginHorizontal: 65,
  },
});
