import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {home} from './pages/home';
import{login} from './pages/login';
import {list} from './pages/list';
import {searchResult} from './Pages/searchResults';
import{signup} from './Pages/singup';
import {history} from './Pages/history';
import{favourites} from './Pages/favourites';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Home" component={home} />    
    <Stack.Screen name="Login" component={login} />    
     <Stack.Screen name="List" component={list}/>
     <Stack.Screen name="Search Result" component={searchResult}/>
     <Stack.Screen name="Signup" component={signup}/>
     <Stack.Screen name="History" component={history}/>
     <Stack.Screen name="Favourites" component={favourites}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
