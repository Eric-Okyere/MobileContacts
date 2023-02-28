import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import {MaterialIcons, MaterialCommunityIcons,  SimpleLineIcons} from '@expo/vector-icons'





const Contact = ({name, phone}) => {
  return (
    
   <View style={styles.container}>
    
    <Image style={styles.Image} source={require("../Images/my.jpg")} />

    <View style={styles.infoCont}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text>{phone}</Text>
    </View>

    <View style={styles.icons}>
        <MaterialIcons name="local-phone" size={30} color="#29b6f2"/>
    </View>

    <View style={styles.icons}>
    <MaterialCommunityIcons name="message-processing" size={30}  color="#29b6f2"/>
    </View>

    <View style={styles.icons}>
    <SimpleLineIcons name="options-vertical" size={30} color="#bcd7e0"/>
    </View>
    
   </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
   Image:{
    width:50,
    height:50,
    borderRadius:50,
    marginLeft:10
   },
   container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:10
   },
   name:{
    fontWeight:"bold",
    fontSize:17
   },
   infoCont:{
    flex:4,
    marginHorizontal:15,
    
   },
   icons:{
   flex:1
   },
  
 
  });



