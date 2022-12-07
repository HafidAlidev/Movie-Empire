import { View, Text, Button } from 'react-native'
import React from 'react'

const WatchLater = ({ navigation }) => {
  return (
    <View>
      <Text>watchLater</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default WatchLater