import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}
    style={styles.ButtonContainer}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  ButtonContainer: { height: 50, width: 100, padding: 10, backgroundColor: "orange", margin: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  ButtonText: { backgroundColor: "orange", fontWeight: 'bold' },
});


export default Button;