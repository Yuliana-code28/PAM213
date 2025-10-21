import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet, Platform} from 'react-native';
export default function InputScreen(){
  const[nombre, setNombre]= useState(''); //cadenas vacias
  const[contraseña, setContraseña]= useState('');//value contraseña
  const[multexto, setMultexto]= useState('');//value texto multilinea
  const MostrarAlerta= () =>{
    if(nombre.trim() === ''){ //.trim es una propiedad que quita o anula los espacios en blanco
      if(Platform.OS === 'web'){ //PUEDE SER IOS O ANDROID, EL WEB ES PARA QUE FUNCIONE EN EL NAVEGADOR DEL PC
        alert('Por favor, escribe tu nombre para continuar. '); //La sintaxis de alert en pc y telefono es diferente
    }else{  
      Alert.alert( //esto es si detecta que esta en telefono
        'Atención',
        'Por favor, escribe tu nombre antes de continuar',
        [
          {text: 'cancelar'},
          {text: 'aceptar'}
        ]
      );
    }
  }else{
    if(Platform.OS === 'web'){
      alert(`Bienvenido, ${nombre} !`);
  }else{
    Alert.alert(
      'Hola', `Bienvenido, ${nombre}`, //duda comillas invertidas ``
      [
        {text: 'cancelar'},
        {text: 'aceptar'}
      ]
    );
  }
}

};
return (
  <View style={styles.container}>
    <Text style={styles.titulo}> Práctica: TextInput y Alert</Text>

    <TextInput //crea un input, la cajita donde vamos a escribir
        style={styles.input}
        placeholder="Escribe tu nombre" //son las letras que aparecen en gris dentro del input
        value={nombre}
        onChangeText={setNombre} //cada que se escriba algo, se va a actualizar el estado del input
      />
    <TextInput //imput contraseña
        style={styles.input}
        placeholder="Contraseña" 
        secureTextEntry={true} //para que oculte lo que se escribe
        keyboardType='numeric' //para que solo acepte numeros
        value={contraseña}
        onChangeText={setContraseña} 
      />  
      
    <TextInput //imput multilinea
        style={styles.input}
        placeholder="Escribe tu nombre" 
        value={multexto}
        multiline={true} //para que sea de varias lineas
        onChangeText={setMultexto} 
      />  

    <Button title="Mostrar Alerta" color='hsla(353, 100%, 82%, 1.00)' onPress={MostrarAlerta}/>
  </View>
);
}
//Estilos
const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#a5c9ffff',
    padding: 20,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input:{
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15,
  },
});

