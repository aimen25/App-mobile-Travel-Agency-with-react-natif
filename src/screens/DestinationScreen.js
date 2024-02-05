import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme'


const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-10';

export default function DestinationScreen(props) {
  // Récupération des données de la destination depuis les paramètres de navigation
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  // Gestion de la navigation vers l'écran de formulaire de contact avec les détails de la destination
  const handleReservation = () => {
    navigation.navigate('ContactForm', {
      title: item.title,
      duration: item.duration,
      // Ajoutez d'autres champs nécessaires ici
    });
  };

  return (
    <View className="bg-white flex-1">
      {/* Image de la destination */}
      <Image source={item.image} style={{ width: wp(100), height: hp(70) }} />
      <StatusBar style={'light'} />

      {/* Boutons de retour et de favoris */}
      <SafeAreaView className={"flex-row justify-between items-center w-full absolute " + topMargin}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          className="p-2 rounded-full mr-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
        >
          <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Contenu détaillé de la destination */}
      <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14">
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start">
            {/* Titre et prix */}
            <Text style={{ fontSize: wp(7) }} className="font-bold flex-1 text-neutral-700">
              {item?.title}
            </Text>
            <Text style={{ fontSize: wp(7) }} className="font-semibold">
              € {item?.price}
            </Text>
          </View>
          {/* Description */}
          <Text style={{ fontSize: wp(3.7) }} className="text-neutral-700 tracking-wide mb-2">{item?.longDescription}</Text>
          {/* Informations sur la destination */}
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon size={wp(7)} color="skyblue" />
              <View className="flex space-y-2">
                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{item.duration}</Text>
                <Text className="text-neutral-600 tracking-wide">Durée</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <MapPinIcon size={wp(7)} color="#f87171" />
              <View className="flex space-y-2">
                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">{item.feature}</Text>
                <Text className="text-neutral-600 tracking-wide">Caractéristique</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* Bouton pour réserver */}
        <TouchableOpacity onPress={handleReservation} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20, marginBottom: 20 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Réservez</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
