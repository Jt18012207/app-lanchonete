import { Text, View, StyleSheet, Image} from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.containerTxt}>Lanchinho do Jhow</Text>
      </View>
      <View>
        <Image src="./img/logo.jpg" alt="Logo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 containerTxt:{
 textAlign:'center',
 color:'#F28729',
 width:'auto',
 fontSize:'60px',
 fontFamily: 'cursive',
 }, 
 container:{
textAlign:'center',
alignItems:'center',
backgroundColor:'#0D0D0D'

 },

});