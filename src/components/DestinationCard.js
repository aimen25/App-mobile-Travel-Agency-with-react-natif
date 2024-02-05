import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const DestinationCard = ({ item }) => {
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Destination', { ...item })}
      style={{ width: 150, height: 200, marginBottom: 10, borderRadius: 10, overflow: 'hidden' }}
    >
      <ImageBackground
        source={item.image}
        style={{ width: '100%', height: '100%', justifyContent: 'space-between' }}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={{ alignSelf: 'flex-end', margin: 10, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 20, padding: 8 }}
        >
          <HeartIcon size={20} color={isFavourite ? 'red' : 'white'} />
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', margin: 10 }}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default function Destinations({ data }) {
  if (!data) {
    return <Text>Pas de données disponibles</Text>;
  }

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: 4 }}>
      {data.map((item, index) => (
        <DestinationCard item={item} key={index} />
      ))}
    </View>
  );
}
