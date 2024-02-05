import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { destinationData } from '../constants';

export default function AllDestinations() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const navigation = useNavigation();

  const filterDestinationsByCategory = (category) => {
    console.log("Filtrage par catégorie:", category); 

    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === 'Toutes' ? destinationData : destinationData.filter(destination => destination.category === selectedCategory);

  const renderDestinationItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigateToDetails(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const navigateToDetails = (item) => {
    navigation.navigate('Destination', { destination: item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Toutes nos destinations</Text>
      {/* Boutons de catégorie */}
    
      <FlatList
    key={selectedCategory} 
    data={filteredData}
    keyExtractor={(item, index) => index.toString()}
    renderItem={renderDestinationItem}
    numColumns={2}
    contentContainerStyle={styles.listContainer}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 16,
   
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 30,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
