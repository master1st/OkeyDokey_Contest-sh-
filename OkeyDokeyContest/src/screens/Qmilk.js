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
import Toggle from '../components/Toggle';


const Qmilk = async ({ route, navigation  }) => {
  const { qdata } = route.params;
  const [data, setData] = useState(
    {
      nonMilk: "우유가\n 안 들어간 것",
      milk: "우유가\n 들어간 것",
    }, 
    );

  const { networkData } = await API.get("/category2/list/1");
  console.log(networkData);

  // const handleHere = textValue => {
  //   if (textValue !== undefined) {
  //     setData({...data, eatin:true});
  //   }
  // };
  const handleNonMilk = () => {
    const nonMilk = data.nonMilk.replace(/\n/g, "");
    navigation.push('EasyMenu', {
      qdata : nonMilk,
    })
  };
  const handleMilk = () => {
    const milk = data.milk.replace(/\n/g, "");
    navigation.push('EasyMenu', {
      qdata : milk,
    })
  }
  return (
    <View style={{flex: 1, backgroundColor: '#F5F7FB'}}>
      <View style={styles.header}>
        <Image
          style={{width: 150, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={{alignItems:'center', justifyContent: 'center', width: '100%'}}>
        <Toggle />
      </View>
      <View style={{alignItems:'center', justifyContent: 'center', width: '100%', marginTop:22}}>
      <Text style={{fontSize: 32, fontFamily:'Pretendard', fontWeight:'bold', color:'#212121'}}>{qdata}</Text>
      </View>
      <View style={{flex:9 , width: '100%', height:'100%',justifyContent: 'center',alignItems:'center'}}>
        <View style={styles.mid}>
          <Quiz handleEvent={handleNonMilk} QuizText={data.nonMilk}/>
          <Quiz handleEvent={handleMilk} QuizText={data.milk}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <CustomButton title={"뒤로가기"} onPress={() => navigation.pop()} width={"50%"} height={150} backgroundColor={"#6D6D6D"} textColor={'white'} fontSize={50}/>
          <CustomButton title={"장바구니"} onPress={""} width={"50%"} height={150} backgroundColor={"#056CF2"} textColor={'white'} fontSize={50}/>
        </View>
      </View>
    </View>
  );
};

export default Qmilk;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    width:'80%',
    height:'100%',
    flex: 1,
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
