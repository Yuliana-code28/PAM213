import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import InputScreen from './InputScreen'
import ImagenScreen from './ImagenScreen'
import ScrollScreen from './ScrollScreen'
import Indicator from './Indicator'
import FlatlistScreen from './FlatlistScreen'
import Modal from './Modal'
import Bottomsheet from './Bottomsheet'

export default function MenuScreen (){
  
    const[ screen, setScreen ]= useState( 'menu'); 

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'input':
            return <InputScreen/>;
        case 'imagen':
            return <ImagenScreen/>;
        case 'scroll':
            return <ScrollScreen/>;
        case 'indicator':
            return <Indicator/>;
        case 'flatlist':
            return <FlatlistScreen/>;
        case 'modal':
            return <Modal/>;
        case 'bottomsheet':
            return <Bottomsheet/>;
        case 'menu':
            default:
                return (
                    <View>
                         <Text>Menu de practicas </Text>
                         <Button title='Pract: Contador' onPress={()=> setScreen('contador')}/>
                         <Button title='Pract: Buttons' onPress={()=> setScreen('botones')}/>
                         <Button title='Pract: Text y input' onPress={()=> setScreen('input')}/>
                        <Button title='Pract: Imagen y fondo' onPress={()=> setScreen('imagen')} />
                        <Button title='Pract: Scroll View' onPress={()=> setScreen('scroll')} />
                        <Button title='Pract: Activity Indicator' onPress={()=> setScreen('indicator')} />
                        <Button title='Pract: Flatlist y Section List' onPress={()=> setScreen('flatlist')} />
                        <Button title='Pract: Modal' onPress={()=> setScreen('modal')} />
                        <Button title='Pract: Bottomsheet' onPress={()=> setScreen('bottomsheet')} />
                        
                    </View>
                );
    }
    
}

