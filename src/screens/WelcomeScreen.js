import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  // État et référence pour l'animation
  const opacityAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  }, [opacityAnim]);

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      {/* Image de fond */}
      <Image
        source={require("../../assets/images/A.png")}
        style={{ height: "100%", width: "100%", position: "absolute" }}
      />

      {/* Contenu et gradient */}
      <View style={{ padding: 20, paddingBottom: 40, marginTop: "auto" }}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp("100%"), height: hp("60%"), position: "absolute", bottom: 0 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: wp("4%"),
              textAlign: "center",
              color: "#001f3f",
              fontWeight: "bold",
              fontStyle: 'italic' // Texte en italique
            }}
          >
            "Embarquez pour le voyage d'une vie : découvrez les meilleures aventures du monde avec nous !"
          </Text>
        </View>
        <Animated.View style={{ opacity: opacityAnim }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: theme.bg(1),
              alignSelf: "center",
              paddingVertical: 12,
              paddingHorizontal: 40,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: '#FFF', // Effet métallisé
              // Ajoutez d'autres styles ici pour un effet métallisé
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: wp("5.5%") }}>
              Allons-y!
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
