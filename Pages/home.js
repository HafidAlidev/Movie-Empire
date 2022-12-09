import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { login, logout, signup_ } from '../redux/actions/users'
import { clearSearchResult } from '../redux/actions/movies'
import { TextInput } from 'react-native-web'
import Button from '../custom componet/Button'
import MovieCardstyles from '../custom componet/moviecard'

const Home = ({ navigation, userState, logout, clearSearchResult }) => {
  const [menuModal, setMenuModal] = useState(false);
  const [search,setSearch] = useState("");

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={menuModal} onRequestClose={() => { setMenuModal(!menuModal); }}>
        <View style={MovieCardstyles.container}>
          <View style={[styles.modalView]}>
            <Button title="Favourites" onPress={() => {
              setMenuModal(!menuModal)
              navigation.navigate("Favourites")
            }} />
            <Button title="Watch Later" onPress={() => {
              setMenuModal(!menuModal)
              navigation.navigate("Watch Later")
            }} />
            <Button title="History" onPress={() => {
              setMenuModal(!menuModal)
              navigation.navigate("History")
            }} />
            <Button title="Login/Signup" onPress={() => {
              setMenuModal(!menuModal)
              navigation.navigate("Login/Signup")
            }} />
            {
              userState[0]?.result?.name && <Button title="Logout" onPress={() => {
                setMenuModal(!menuModal)
                logout()
              }} />
            }
            <Button title="Back" onPress={() => setMenuModal(!menuModal)} />
          </View>
        </View>
      </Modal>
      <Text>{userState[0]?.result?.name ? `Welcome Back ${userState[0]?.result?.name}` : 'Home'}</Text>
      <Button title='Menu' onPress={() => setMenuModal(!menuModal)}style={styles.menubutton}/>
      <TextInput  style={styles.searchinput} placeholder= ""  value = {search}  onChangeText = {setSearch}/>
      <Button title = 'Search' onPress={() => navigation.navigate("Search Result",{searchtext:search})} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "left", alignItems: "left", marginTop: 22 },
  searchinput: { margin: 15, width: 1000,height:30, alignItems: 'left'},
  modalText: { marginBottom: 10 },
  modalView: { width: "80%", height: 'auto', margin: 5, backgroundColor: "black", borderColor: "red", borderWidth: 1, borderRadius: 5, padding: 15, alignItems: "center", justifyContent: "space-between" },
  menubutton: {height:20,width:40,alignItems:'left',justifyContent:'left',padding:20,backgroundColor:"orange"}
});

const mapStateToProps = (userState) => (userState)
const mapDispatchToProps = { login, logout, signup_, clearSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(Home)