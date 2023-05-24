import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import CustomModal from './../components/CustomModal';

const HomeGrayColor = () => {
  return (
    <View style={{top: '5%', backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image
          style={{width: 100, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={styles.grayDiv}>
        <CustomModal>
          <Text>hello</Text>
        </CustomModal>
      </View>
    </View>
  );
};

export default HomeGrayColor;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grayDiv: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    opacity: 0.3,
  },
});
