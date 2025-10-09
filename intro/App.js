//1.Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2.Main:Zona de componentes 
export default function App() {
  const [contador, setContador]=useState(0); //contador variable, setContador es función
  //esto de userState que hicimos fue una destructuración
  //uso de un hook (useState) para manejar el estado de una variable
  return (
    <View style={styles.container}> {/* todo lo que queremos que sea visible, debe de estar dentro del componente View */}

      <Text>Contador:{contador} </Text> {/* como es variable local se pone entre llave pq tiene que estar en un componente */}
      <Button title= "Agregar" onPress={()=>setContador(contador+1)}/> {/* al momento de presionar el boton, se ejecuta una función flecha que llama a setContador y al contador le suma 1 */}
      <Button title= "Quitar" onPress={()=>setContador(contador-1)}/>
      <Button title="Reiniciar" onPress={()=>setContador(0)}/>
      <StatusBar style="auto" />

    </View>

  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
