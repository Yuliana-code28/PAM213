import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Button, Alert, Platform} from 'react-native';

const MenuScreens = () => { 
  //estados
  const { useState, useEffect } = React;
  const {cancelable} = Alert;
  //IMAGENES
  const gato = require('../assets/recursos/gatito.jpg');
  const jinx = require('../assets/recursos/Jinx.webp');
  const hojas = require('../assets/recursos/hojas.jpg');
  const flores= require('../assets/recursos/Flores.png');
  const fondo= require('../assets/recursos/fondo.jpg');
  const imagen= require('../assets/recursos/imagenuno.jpg');
  
 
const MostrarAlerta = (titulo, detalles) => {
  if(Platform.OS === 'web'){
    alert(`${titulo}\n\n${detalles}`);
  }else{
    Alert.alert(
      titulo,
      detalles,
      [
        { text: "Cerrar", onPress: () => console.log("Alerta cerrada") }
      ],
      { cancelable: true }
    );
  }
}

return (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Mi galeria</Text>
    <TouchableOpacity>
      <ImageBackground 
      source={gato} 
      style={{ width: 300, height: 200, marginBottom: 20 }} 
      imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>Gato Blanco</Text>
        <Text>Un gato blanco en un tejado.</Text>
      </ImageBackground>
      <Button title="Ver detalles"  />
    </TouchableOpacity>
    
      <TouchableOpacity>
      <ImageBackground 
      source={jinx} 
      style={{ width: 300, height: 200, marginBottom: 20 }} 
      imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>Jinx</Text>
        <Text>Jinx de LOL.</Text>
      </ImageBackground>
      <Button title="Ver detalles"  />
    </TouchableOpacity>

      <TouchableOpacity>
      <ImageBackground 
      source={flores} 
      style={{ width: 300, height: 200, marginBottom: 20 }} 
      imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>Flores</Text>
        <Text>Flores bonitas.</Text>
      </ImageBackground>
      <Button title="Ver detalles"  />
    </TouchableOpacity>

      <TouchableOpacity>
      <ImageBackground 
      source={hojas} 
      style={{ width: 300, height: 200, marginBottom: 20 }} 
      imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>Hojas</Text>
        <Text>solo hojas.</Text>
      </ImageBackground>
      <Button title="Ver detalles"  />
    </TouchableOpacity>

      <TouchableOpacity>
      <ImageBackground 
      source={fondo} 
      style={{ width: 300, height: 200, marginBottom: 20 }} 
      imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>Fondo</Text>
        <Text>Solo fondo.</Text>
      </ImageBackground>
      <Button title="Ver detalles"  />
    </TouchableOpacity>

      <TouchableOpacity>
      <ImageBackground 
      source={gato} 
      style={{ width: 300, height: 200, marginBottom: 20 }} 
      imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>Gato Blanco</Text>
        <Text>Un gato blanco en un tejado.</Text>
      </ImageBackground>
      <Button title="Ver detalles"  />
    </TouchableOpacity>


    </ScrollView>
  );
  
}; 


 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  subtitle:{
    fontSize: 18,
    marginBottom: 5,
  }
});
 