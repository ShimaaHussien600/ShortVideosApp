import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utlis/colorsUtils';


const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor:Colors.WHITE,
    justifyContent: 'center',
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: width / 1.5,
    height: height / 8
  },
  contentBackground: {
    height: height,
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    backgroundColor: Colors.DARK_GREEN_OPACITY,
    borderTopLeftRadius: 70
  },
   inputContainer: {
    backgroundColor: "#f0f2f5",
    padding: 20,
    marginTop: -height / 15,
    borderRadius: 20,
    width: width / 1.1,
    height: height / 2
  },
  image: {
    width:'100%',
    height: '100%',
    justifyContent: "center"
  },
  text: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign:'center', 
    color: Colors.WHITE
  }
});
export default styles;