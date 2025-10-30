import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

export default function ScrollViewScreen() {
  const [items, setItems] = useState(["Opción 1", "Opción 2", "Opción 3"]);

 
  const agregarOpcion = () => {
    const nuevaOpcion = `Opción ${items.length + 1}`;
    setItems([...items, nuevaOpcion]);
  };

  
  const borrarUltima = () => {
    if (items.length > 3) {
      
      setItems(items.slice(0, items.length - 1));
    } else {
      alert("Solo se borran las opciones que agregaste nuevas");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ejemplo de ScrollView</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        //horizontal={true}
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        scrollEnabled={true}
        keyboardDismissMode="on-drag"
      >
        {items.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Agregar opción" color="#c73c84ff" onPress={agregarOpcion} />
        <View style={styles.space} />
        <Button title="Borrar última" color="#4fc9d9ff" onPress={borrarUltima} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#d6f1d9ff',
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 15, 
    color: '#2C3E50',
  },
  scroll: { 
    flex: 1, 
    marginBottom: 15, 
    borderRadius: 10,
    backgroundColor: '#e9edf0ff',
  },
  content: { 
    paddingVertical: 15, 
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#dc96c0ff',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: { 
    fontSize: 18, 
    color: '#1F2937',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  space: {
    width: 10, 
    },
});