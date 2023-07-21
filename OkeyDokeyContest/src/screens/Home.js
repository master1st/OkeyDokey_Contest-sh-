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
import { useDispatch, useSelector } from 'react-redux';
import { addOrderNumber, setIsPack } from '../redux/slices/shoppingSlice';

const Home = ({ route }) => {
  const receivedData = route.params;
  const shoppings = useSelector(state => state.shopping.shoppings);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(receivedData);
  // 데이터를 받는 부분이 존재하겠지
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
    if(receivedData){
      navigation.navigate('favorites');
    } else {
    dispatch(setIsPack(false));
    dispatch(addOrderNumber());
    navigation.push('QCoffee', {
      qdata : data.eatin,
    })
  }
  }
  const handleTakeOut = () => {
    if(receivedData){
      navigation.navigate('favorites');
    } else{
    dispatch(setIsPack(true));
    dispatch(addOrderNumber());
    navigation.push('QCoffee', {
      qdata : data.takeout,
    })
  }
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
          <Quiz handleEvent={handleHere} QuizText={data.eatin} height={"90%"}/>
          <Quiz handleEvent={handleTakeOut} QuizText={data.takeout} height={"90%"}/>
        </View>
        <View style={{width:'100%', marginBottom: 150}}>

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
