import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { destinationData } from '../constants'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Destinations({ data }) {
  const navigation = useNavigation(); 

  if (!data) {
    return <Text></Text>;
  }

  return (
    <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(4) }}>
      {data.map((item, index) => (
        <DestinationCard item={item} key={index} navigation={navigation} /> 
      ))}
    </View>
  );
}

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Destination', { ...item })}
      style={{ width: wp(44), height: wp(65), marginBottom: hp(2) }}
    >
      <Image
        source={item.image}
        style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 35 }}
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{ width: '100%', height: '15%', position: 'absolute', bottom: 0, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
      />

      <TouchableOpacity
        onPress={() => toggleFavourite(!isFavourite)}
        style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 20, padding: 8 }}
      >
        <HeartIcon size={20} color={isFavourite ? 'red' : 'white'} />
      </TouchableOpacity>

      <Text style={{ fontSize: wp(4), color: 'white', fontWeight: 'bold', paddingHorizontal: 10, position: 'absolute', bottom: 10 }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: wp(2.2), color: 'white', paddingHorizontal: 10, position: 'absolute', bottom: 3 }}>
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
}
