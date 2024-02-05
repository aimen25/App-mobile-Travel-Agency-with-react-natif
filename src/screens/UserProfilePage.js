import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfilePage = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_info');
        if (jsonValue != null) {
          setUserData(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/images/22.jpg')} style={styles.backgroundImage}>
        <View style={styles.content}>
          {userData && (
            <Text style={styles.welcomeText}>Bienvenue sur votre profil, {userData.email}!</Text>
          )}

          

          <Button
            title="Retour à l'accueil"
            onPress={() => navigation.navigate('Home')}
            color="#4682B4"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },

});

export default UserProfilePage;
