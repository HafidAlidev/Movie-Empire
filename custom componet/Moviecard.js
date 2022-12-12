import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const MovieCardstyles = StyleSheet.create({
 
  itemsList: {alignContent:"stretch", width: "100%"},
  container:{flex: 1,justifyContent: 'center',paddingTop: 40,backgroundColor: "black",padding: 8,},
  items:{borderWidth:1,padding:10,margin:5,borderRadius:5,backgroundColor:"crimson", fontFamily:"Abril Fatface", color:"white", fontSize:"60px"},  
  itemsText:{color:"white", fontSize:"60px" , fontFamily:"Abril Fatface", fontWeight:"bold"} ,
  movie:{alignSelf:"flex-end"} 
});

export default MovieCardstyles
