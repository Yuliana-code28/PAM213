import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform, Switch, ImageBackground, Image } from 'react-native';

export default function InputScreen() {
  const [nombre, setNombre] = useState(''); 
  const [correo, setCorreo] = useState(''); 
  const flores = require('../assets/Recursos/gatito.jpg'); 
  const [terminos, setTerminos] = useState(false);

  const MostrarAlerta = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      if (Platform.OS === 'web') {
        alert('Por favor, escribe tu nombre completo y correo electrónico para continuar.');
      } else {
        Alert.alert(
          'Error',
          'Por favor, escribe tu nombre completo y correo electrónico para continuar.',
          [
            { text: 'Cancelar' },
            { text: 'Aceptar' }
          ]
        );
      }
      return;
    }

    if (!terminos) {
      if (Platform.OS === 'web') {
        alert('Favor de aceptar los términos y condiciones para poder continuar.');
      } else {
        Alert.alert(
          'Terminos no aceptados',
          'Favor de aceptar los términos y condiciones para poder continuar.',
          [
            { text: 'Cancelar' },
            { text: 'Aceptar' }
          ]
        );
      }
      return; 
    }

    if (Platform.OS === 'web') {
      alert(`Nombre: ${nombre}\nCorreo: ${correo}`);
    } else {
      Alert.alert(
        'Registro exitoso',
        `Nombre: ${nombre}\nCorreo: ${correo}`,
        [
          { text: 'Cancelar' },
          { text: 'Aceptar' }
        ]
      );
    }
  };

  return (
    <ImageBackground source={flores} style={styles.background} imageStyle={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
       
        <View style={styles.formContainer}>
          <Text style={styles.titulo}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={correo}
            onChangeText={setCorreo}
          />

          <View style={styles.switchRow}>
            <Text style={styles.switchText}> Aceptar términos y condiciones </Text>
            <Switch value={terminos} onValueChange={() => setTerminos(!terminos)} />
          </View>

          <Button title="Registrarse" color="hsla(232, 86%, 16%, 1.00)" onPress={MostrarAlerta} />
        </View>
      </View>
    </ImageBackground>
  );
}

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)', 
    borderRadius: 15, 
    padding: 20,
    width: '90%', 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    width: '100%', 
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff20',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginVertical: 5,
  },
  switchText: {
    color: '#fff',
  },
});