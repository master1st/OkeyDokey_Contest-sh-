import React, {useEffect, useState} from 'react';
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
import API from '../API/api';


const Qmilk = ({ route, navigation  }) => {
  const { qCoffee } = route.params;
  const [milkText, setMilkText] = useState([]);
  const [nonmilkText, setNonmilkText] = useState([]);
  const [qcoffee, setQcoffee] = useState([]);


    const fetchData = async () => {
      try {
        const response = await API.get("/category2/list/1");
        const results = response.data;
        // setResult(results);
        console.log(results);
        const milkItem = results.find(item => item.name === "우유가 들어간 것");
        const nonmilkItem = results.find(item => item.name === "우유가 안 들어간 것");
        
        if (milkItem && nonmilkItem) {
          setMilkText(milkItem);
          setNonmilkText(nonmilkItem);
        }
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchData();
      setQcoffee();
    }, []);

  const handleNonMilk = () => {
    navigation.push('EasyMenu', {
      qMilk : nonmilkText.name,
      qCoffee: qCoffee,
    })
  };
  const handleMilk = () => {
    navigation.push('EasyMenu', {
      qMilk : milkText.name,
      qCoffee: qCoffee,
    })
  }

  let nonmilkdata = nonmilkText.name;
  let milkdata = milkText.name;
  if(milkdata && nonmilkdata){
    milkdata = milkdata.replace("들", "\n들");
    nonmilkdata = nonmilkdata.replace("안", "\n안");
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
      <Text style={{fontSize: 32, fontFamily:'Pretendard', fontWeight:'bold', color:'#212121'}}>{qCoffee}</Text>
      </View>
      <View style={{flex:9 , width: '100%', height:'100%',justifyContent: 'center',alignItems:'center'}}>
        <View style={styles.mid}>
          <Quiz handleEvent={handleNonMilk} QuizText={nonmilkdata}/>
          <Quiz handleEvent={handleMilk} QuizText={milkdata}/>
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
