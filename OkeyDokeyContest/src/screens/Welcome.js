import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex :1, backgroundColor: '#F5F7FB'}}>
        <View style={styles.header}>
        <Image
          style={{width: 150, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
    </View>
    <View style={{flex:9, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontSize:50, marginBottom:100}}>음메카우 상명대점</Text>
    </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#F5F7FB',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
      },
});