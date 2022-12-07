import { View, Text, Button, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login, logout, signup_ } from '../redux/actions/users'

const Home = ({ navigation, userState }) => {
  const [menuModal, setMenuModal] = useState(false);
  console.log(userState[0])
  return (
    <View>
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
            <Button title="Back" onPress={() => setMenuModal(!menuModal)} />
          </View>
        </View>
      </Modal>
      <Text>{userState[0]?.result?.name ? `Welcome Back ${userState[0]?.result?.name}` : 'Home'}</Text>
      <Button title='Menu' onPress={() => setMenuModal(!menuModal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 },
  modalText: { marginBottom: 10 },
  modalView: { width: "80%", height: 'auto', margin: 5, backgroundColor: "white", borderColor: "black", borderWidth: 1, borderRadius: 5, padding: 15, alignItems: "center", justifyContent: "space-between" }
});

const mapStateToProps = (userState) => (userState)
const mapDispatchToProps = { login, logout, signup_ }

export default connect(mapStateToProps, mapDispatchToProps)(Home)