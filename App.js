import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />    
    <Stack.Screen name="About" component={AboutScreen} />    
     <Stack.Screen name="Contact" component={ContactScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
