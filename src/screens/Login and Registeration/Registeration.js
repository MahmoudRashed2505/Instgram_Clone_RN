import React from 'react'
import { View, Text ,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native'
import * as firebase from 'firebase';

export default class Registeration extends React.Component{
    
    state={
        name:"",
        email:"",
        password:"",
        errorMessage:null
    }

    handeleSignUp = () =>{
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(userCredentials =>{
            return userCredentials.user.updateProfile({
                displayName:this.state.name
            })
        })
        .catch(error=>this.setState({errorMessage:error.message}));
        if (this.state.errorMessage == null){
            this.props.navigation.navigate("Home")
        }
    }


    render(){
    return (
        <View style={StyleSheet.container}>
        <Text style={styles.greeting}>Welcome To Instagram Clone</Text>
        <Image 
        source={require('../../assets/Images/instagram-logo.png')}
        style={styles.logo}
        />
        <View style={styles.errorMessage}>
    {this.state.errorMessage && <Text styles={styles.error}> {this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
        <View >
                <Text style={styles.inputTitle}> Name </Text>
                <TextInput style={styles.input} autoCapitalize="none" onChangeText={name => this.setState({name})} value={this.state.name}></TextInput>
            </View>

            <View style={{marginTop:32}}>
                <Text style={styles.inputTitle}> Email Address </Text>
                <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({email})} value={this.state.email}></TextInput>
            </View>

            <View style={{marginTop:32}}>
                <Text style={styles.inputTitle}> Password </Text>
                <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={password=>this.setState({password})} value={this.state.password}></TextInput>
            </View>

        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={this.handeleSignUp}>
            <Text style={{color:"#fff"}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:"center", marginTop:32}} onPress={()=>this.props.navigation.goBack()}>
            <Text style={{color:"#414959", fontSize:13}}>
                Have account Already? <Text style={{fontWeight:"500", color:"#e9446a"}}>Sign In</Text>
            </Text>
        </TouchableOpacity>
    </View>
)
}

}
const styles = StyleSheet.create({
container:{
flex:1,
},
greeting:{
marginTop:20,
fontSize:15,
fontWeight:"400",
textAlign:"center"
},
logo:{
resizeMode:"contain",
width:80,
height:80,
marginTop:25,
marginLeft:140
},

errorMessage:{
height:72,
alignItems:'center',
justifyContent:"center",
marginHorizontal:30,
},

error:{
color:"#E9446A",
fontSize:13,
fontWeight:"600",
textAlign:"center"
},

form:{
marginBottom:40,
marginHorizontal:30
},

inputTitle:{
color:"#8a8f9e",
fontSize:10,
textTransform:"uppercase",
},

input:{
borderBottomColor:"#8a8f9e",
borderBottomWidth:StyleSheet.hairlineWidth,
height:40,
fontSize:15,
color:"#161f3d"
},

loginBtn:{
marginHorizontal:30,
backgroundColor:"#e9446a",
borderRadius:10,
height:52,
alignItems:'center',
justifyContent:"center"
}

})

