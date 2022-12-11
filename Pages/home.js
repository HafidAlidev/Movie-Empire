import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { login, logout, signup_ } from '../redux/actions/users'
import { clearSearchResult } from '../redux/actions/movies'
import { TextInput } from 'react-native-web'
import Button from '../custom componet/Button'

const Home = ({ navigation, userState, logout }) => {
  const [user, setUser] = useState(userState[0]?.result ? userState[0].result : "No user")
  const [menuModal, setMenuModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    setUser(userState[0]?.result ? userState[0].result : "No user")
  }, [search])

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={menuModal} onRequestClose={() => { setMenuModal(!menuModal); }}>
        <View style={styles.container}>
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
      <Button title='Menu' onPress={() => setMenuModal(!menuModal)} style={styles.menubutton} />
      <TextInput style={styles.searchinput} placeholder="Search for a movie..." value={search} onChangeText={setSearch} />
      <Button title='Search' onPress={() => navigation.navigate("Search Result", { searchtext: search, user: user })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 },
  searchinput: { margin: 15, width: "50%", height: 30, alignItems: 'left', borderWidth: 2 },
  modalText: { marginBottom: 10 },
  modalView: { width: "80%", height: 'auto', margin: 5, backgroundColor: "black", borderColor: "red", borderWidth: 1, borderRadius: 5, padding: 15, alignItems: "center", justifyContent: "space-between" },
  menubutton: { height: 20, width: 40, alignItems: 'left', justifyContent: 'left', padding: 20, backgroundColor: "orange" }
});

const mapStateToProps = (userState) => (userState)
const mapDispatchToProps = { login, logout, signup_, clearSearchResult }

export default connect(mapStateToProps, mapDispatchToProps)(Home)