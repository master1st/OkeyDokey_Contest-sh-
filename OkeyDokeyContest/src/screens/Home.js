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
import Quiz from '../components/Quiz';
import CustomButton from '../components/CustomButton';


const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(
    {
      eatin: `매장에서\n먹기`,
      takeout: "들고 가기",
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
    navigation.push('QCoffee', {
      qdata : data.takeout,
    })
  }
  const handleNonMembers = () => {
      navigation.push('QCoffee', {
        qdata : "비회원",
    })
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F5F7FB'}}>
      <View style={styles.header}>
        <Image
          style={{width: 150, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={{flex:9 , width: '100%',height:'100%',justifyContent: 'center',alignItems:'center'}}>
        <View style={styles.mid}>
          <Quiz handleEvent={handleHere} QuizText={data.eatin}/>
          <Quiz handleEvent={handleTakeOut} QuizText={data.takeout}/>
        </View>
        <View style={{width:'100%'}}>
          <CustomButton title={"비회원으로 계속하기"} onPress={handleNonMembers} width={"100%"} height={150} backgroundColor={"#056CF2"} textColor={'white'} fontSize={50}/>
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
    width: '80%',
    height: '50%',
    flex: 1,
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
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
