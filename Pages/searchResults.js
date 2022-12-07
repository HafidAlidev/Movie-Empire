import { View, Text, Button } from 'react-native'
import React from 'react'

const SearchResults = ({ navigation }) => {
  return (
    <View>
      <Text>search</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default SearchResults