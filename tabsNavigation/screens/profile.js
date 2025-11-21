import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
return (
<View style={styles.container}>
<View style={styles.iconRow}>
<Ionicons name="person-outline" size={28} color="green" />
<Text style={styles.title}>Perfil de usuario</Text>
</View>

  <Pressable style={[styles.button, styles.buttonDetalle]} onPress={() => navigation.navigate('Detalle')}>
    <Text style={styles.buttonText}>Detalles de usuario</Text>
  </Pressable>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 20,
justifyContent: 'center',
alignItems: 'center',
},
iconRow: {
flexDirection: 'column',
alignItems: 'center',
},
title: {
fontSize: 22,
fontWeight: 'bold',
marginLeft: 10,
color: 'green',
},
button: {
paddingVertical: 12,
paddingHorizontal: 30,
borderRadius: 8,
marginTop: 20,
width: '80%',
alignItems: 'center',
},
buttonDetalle: {
backgroundColor: '#94ffedff',
},
buttonText: {
color: '#000',
fontWeight: '600',
},
});