import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import Contact from './components/Contact'

const ContactScreen = () => {

  const contacts = [
    { name:"Eric Okyere" , number:"0247747624"},
    { name:"Kofi Mensah" , number:"028327462"},
    { name:"Benjamin Abam" , number:"0543237327"},
    { name:"Nana Adjoa Sarfo" , number:"054396775"},
    { name:"Mary Barfo" , number:"0244456776"},
    { name:"Christopher Ansah" , number:"0256748497"},
    { name:"Dorinda Akoto" , number:"0557325731"},
    { name:"Mercy Frimpong" , number:"0246526379"},
    { name:"Lodina Agyeman" , number:"0232466527"},
    { name:"Kelvin Badasu" , number:"0556342274"},
    { name:"Kelvin Badasu" , number:"0556342274"},
    { name:"Kelvin Badasu" , number:"0556342274"},
    { name:"Kelvin Badasu" , number:"0556342274"},
  ]

  return (
    <View>
      
        <FlatList  
        data={contacts}
        renderItem={({item})=>{
          return <Contact name={item.name} phone={item.number} />
        }}
        keyExtractor={(item)=>item.number}
        />
      
    </View>
  )
}

export default ContactScreen