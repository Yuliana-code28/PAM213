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
import Practica11 from './Practica11.js'

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
        case 'Practica 11':
            return <Practica11/>
        case 'menu':
            default:
                return (
                    <View>
                         <Text>Menu de practicas </Text>
                         <Button color= 'hsla(266, 92%, 66%, 1.00)'  title='Pract: Contador' onPress={()=> setScreen('contador')}/>
                         <Button color= 'hsla(266, 92%, 66%, 1.00)' title='Pract: Buttons' onPress={()=> setScreen('botones')}/>
                         <Button color='hsla(266, 92%, 66%, 1.00)'  title='Pract: Text y input' onPress={()=> setScreen('input')}/>
                        <Button color= 'hsla(266, 92%, 66%, 1.00)' title='Pract: Imagen y fondo' onPress={()=> setScreen('imagen')} />
                        <Button color='hsla(266, 92%, 66%, 1.00)'  title='Pract: Scroll View' onPress={()=> setScreen('scroll')} />
                        <Button color= 'hsla(266, 92%, 66%, 1.00)' title='Pract: Activity Indicator' onPress={()=> setScreen('indicator')} />
                        <Button color= 'hsla(266, 92%, 66%, 1.00)' title='Pract: Flatlist y Section List' onPress={()=> setScreen('flatlist')} />
                        <Button color= 'hsla(266, 92%, 66%, 1.00)'  title='Pract: Modal' onPress={()=> setScreen('modal')} />
                        <Button color= 'hsla(266, 92%, 66%, 1.00)'  title='Pract: Bottomsheet' onPress={()=> setScreen('bottomsheet')} />
                        <Button color= 'hsla(230, 65%, 68%, 1.00)'  title='Pract 11' onPress={()=> setScreen('Practica 11')}/>
                    </View>
                );
        
    }
    
}

