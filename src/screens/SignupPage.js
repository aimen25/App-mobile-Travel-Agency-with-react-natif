import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ImageBackground, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validator from 'validator'; // Importer la bibliothèque de validation d'e-mail

const SignupPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Validation de l'e-mail avec la bibliothèque validator
      if (!validator.isEmail(email)) {
        throw new Error("Adresse email invalide.");
      }

      if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        throw new Error("Veuillez remplir tous les champs.");
      }

      if (password.length < 8) {
        throw new Error("Le mot de passe doit contenir au moins 8 caractères.");
      }

      const userInfo = { email, password };
      const jsonValue = JSON.stringify(userInfo);
      await AsyncStorage.setItem('@user_info', jsonValue);
      navigation.navigate('UserProfile');
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", error.message || "Une erreur s'est produite lors de l'enregistrement.");
    }
  };

  return (
    <ImageBackground source={require('../../assets/images/register.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Inscrivez-vous</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button title="S'inscrire" onPress={handleSignup} color="#4682B4" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  // Ajoutez d'autres styles selon vos besoins
});

export default SignupPage;
