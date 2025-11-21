import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
return (
<View style={styles.container}>
<Text style={styles.title}>Detalles de usuario</Text>
<Text style={styles.subtitle}>Usando Navigation Stack</Text>
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
title: {
fontSize: 22,
fontWeight: 'bold',
marginLeft: 10,
},
subtitle: {
fontSize: 18,
marginTop: 10,
color: 'blue',
},
});