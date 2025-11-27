import React from 'react';
import { SafeAreaView } from 'react-native';
import InsertUsuarioScreen from './screens/InsertUsuarioScreen'; // ajusta la ruta según tu carpeta

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InsertUsuarioScreen />
    </SafeAreaView>
  );
}
 