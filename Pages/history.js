import { View, Text, Button } from 'react-native'
import React from 'react'

const History = ({ navigation }) => {
  return (
    <View>
      <Text>history!!!!</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default History