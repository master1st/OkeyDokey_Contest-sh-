import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text>okdk</Text>
      </View>
      <View>
      <View>
        <Text>
          매장에서 먹기
        </Text>
      </View>
      <View>
        <Text>
          들고가기
        </Text>
      </View>
      </View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header : {
    height: 160,
    backgroundColor: '#F5F7FB',
  }
})