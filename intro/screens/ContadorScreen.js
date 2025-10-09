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

      <Text style={styles.texto}>Contador: </Text> 
      <Text style={styles.texto2}>{contador} </Text> {/* como es variable local se pone entre llave pq tiene que estar en un componente */}
      {/* Nueva vista */}
      <View style={styles.botonesContainer}> 

      <Button color="red" title= "Agregar" onPress={()=>setContador(contador+1)}/> {/* al momento de presionar el boton, se ejecuta una función flecha que llama a setContador y al contador le suma 1 */}
      <Button color="red" title= "Quitar" onPress={()=>setContador(contador-1)}/>
      <Button color="red" title="Reiniciar" onPress={()=>setContador(0)}/>
      <StatusBar style="auto" />

      </View>
    </View>

  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,

    
    backgroundColor: 'hsla(53, 100%, 86%, 1.00)',
    alignItems: 'center', /* posiciona en el eje x */
    justifyContent: 'center', /* posiciona en el eje Y */
  }, 
  texto: {
    color: 'hsla(238, 61%, 34%, 1.00)',
    fontSize: 30,
    fontFamily:'Times New Roman',
    fontWeight: 'bold', //letra negrita
    fontStyle: 'italic', //letra cursiva
    textDecorationLine: 'line-through', //TACHADO DE LETRA
  },
  texto2: {
    color: 'hsla(337, 61%, 34%, 1.00)',
    fontSize: 35,
    fontFamily:'Courier',
    fontWeight: '700', //grosos de la letra
    fontStyle: 'normal', 
    textDecorationLine: 'underline', //Subraya la letra
  },
  botonesContainer: {
    marginTop: 15, //margen de arriba
    flexDirection: 'row', //coloca el objeto en fila
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 10, //espacio entre los botones
  },
});
