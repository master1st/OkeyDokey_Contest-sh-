import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(
    {
      eatin: false,
      takeout: false,
    }, 
    );
  // const handleHere = textValue => {
  //   if (textValue !== undefined) {
  //     setData({...data, eatin:true});
  //   }
  // };
  const handleHere = () => {
    navigation.push('QCoffee', {
      qdata : data.eatin,
    })
  }
  const handleTakeOut = () => {
    navigation.push('Qmilk', {
      qdata : data.takeout,
    })
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image
          style={{width: 100, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={{flex: 9}}>
        <View style={styles.mid}>
          <TouchableOpacity onPress={handleHere} style={styles.left}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              매장에서 먹기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTakeOut} style={styles.right}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>들고가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    height: '60%',
    marginLeft: 30,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginRight: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 3,
  },
  right: {
    height: '60%',
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 3,
  },
});
