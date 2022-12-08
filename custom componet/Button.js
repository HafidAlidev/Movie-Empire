import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}
        style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );


  const styles = StyleSheet.create({
    ButtonContainer: {height:50,width:100,alignItems:'left',justifyContent:'left',padding:10,backgroundColor:"orange",margin:10},
    ButtonText:{backgroundColor:"orange",justifyContent:'center',alignItems:'center',display:'flex',font:100},
  });


  export default Button;