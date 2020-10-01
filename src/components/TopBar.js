import React from 'react';
import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function TopBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image source={require('./../assets/Images/photo-camera.png')} style={{width:30,height:30, marginTop:15}} />
            </TouchableOpacity>
            <Image source={require('./../assets/Images/737566.png')} style={styles.img}/>
            <TouchableOpacity>
                <Image source={require('./../assets/Images/s.png')} style={{ width: 30, height: 30,marginTop:15 }} />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:55,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  img:{
      height:40,
      width:90,
     
      marginTop:10,
      resizeMode:"stretch"
  }
});

