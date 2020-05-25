import * as React from 'react';
import { Component } from "react";
import { View, Text, Image, Button, StyleSheet, ImageBackground } from "react-native";
import imagen_inicio from "../../../assets/icono_inicio.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as firebase from 'firebase';
//import { ObtenerDatos, ObtenerImagen} from "../../data/consultas";


// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDZcx0RkSilhBmk3E7Ccu8WtxNjwPk4USg ",
    authDomain: "appfyh.es",
    databaseURL: "https://find-your-holidays-5eb36.firebaseio.com",
    projectId: "find-your-holidays-5eb36",
    storageBucket: "gs://find-your-holidays-5eb36.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id"
  };

  if  ( ! firebase . apps . length )  {
  firebase.initializeApp(firebaseConfig);
  }




const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(1,116,223,1)"
    },
    text: {
        color:"white",
        fontSize:25
    },
    textPrincipal:{
        fontSize: 50,
        color:"white"
    },
    div:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buton:{
        flex:0.5,
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center"
    }

});

//const storage =  firebase.storage().ref();


 class HomeScreen extends React.Component {
     constructor(props) {
       super(props)

       this.state = {
          imagen:"",
          datos:[],
          loading:true
       };
      /* storage.child("Almería.jpg").getDownloadURL().then((url)=>{
           this.setState({imagen: url})
            console.log(url)
        })*/

        //;




     };


/*
     componentDidMount = async () => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
         await delay(2000);
         this.setState({loading:false});

       }
*/

    render () {

const {imagen, loading, datos} = this.state;
        return (
            <SafeAreaView style={styles.content}>
                <View style={styles.div}>
                <Text style={styles.textPrincipal}>FYH</Text>
                <Text style={styles.text}>Find Your Holidays</Text>
                </View>
                <View style={{
                    flex:4,
                    //width:"100%"
                    alignItems:"center"
                }}>


                 </View >
                 <View style={{
                    flex:0.5,
                    margin:25
                }}>

                  </View>


            </SafeAreaView>




        );
        }
    }


export default HomeScreen;