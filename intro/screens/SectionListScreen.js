import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'

//variable para guardar datos
const houses = [
    //primera seccion
    {
        title: 'Dc comics',
        data: [ 'superman', 'batman', 'robin', 'wonder woman', 'startfire', 'raven', 'nightwing', 'cyborg','flash'],
    },
    //segunda seccion
    {
        title: 'Marvel comics',
        data:[ 'spiderman', 'ironman', 'wanda', 'vision', 'hulk', 'capitan america', 'wolverine', 'viuda negra', 'thor' ],
    }
];

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
      sections={houses}
      keyExtractor={(item)=> item}
      renderItem={({item})=><Text style={styles.items}>{item}</Text>}
      renderSectionHeader={({section})=>(
      <Text style={styles.sectionHeader}>{section.title}</Text>        

      )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default SectionListScreen