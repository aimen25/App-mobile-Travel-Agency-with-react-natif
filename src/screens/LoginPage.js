import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    try {
      const jsonValue = await AsyncStorage.getItem("@user_info");
      const userData = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (
        userData &&
        userData.email === email &&
        userData.password === password
      ) {
        navigation.navigate("UserProfile");
      } else {
        Alert.alert("Erreur", "Email ou mot de passe incorrect.");
      }
    } catch (e) {
      console.error(e);
      Alert.alert(
        "Erreur",
        "Une erreur s'est produite lors de la tentative de connexion."
      );
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/detail.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>

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

        <Button title="Login" onPress={handleLogin} color="#4682B4" />
        <Text
          style={styles.switchText}
          onPress={() => navigation.navigate("SignupPage")}
        >
          Pas encore de compte ? Inscrivez-vous
        </Text>
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
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  switchText: {
    color: "white",
    textAlign: "center",
    marginTop: 15,
  },
  // autres styles si nécessaire
});

export default LoginPage;
