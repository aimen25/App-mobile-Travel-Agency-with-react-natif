import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

// Liste des destinations disponibles (à titre d'exemple)
const destinations = [
  { label: "Alger", value: "alger" },
  { label: "Hammamet", value: "hammamet" },
  { label: "Paris", value: "paris" },
  { label: "Londres", value: "londres" },
  { label: "Rome", value: "rome" },
  { label: "New York", value: "new-york" },

  // Ajoutez d'autres destinations selon vos besoins
];

export default function ContactForm() {
  const navigation = useNavigation();
  const [selectedDestination, setSelectedDestination] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [numéroDeTéléphone, setNuméroDeTéléphone] = useState("");
  const [durée, setDurée] = useState("");
  const [dateDeDépart, setDateDeDépart] = useState("");
  const [nombreDePersonnes, setNombreDePersonnes] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmission = async () => {
    // Validation simple (à améliorer selon vos besoins)
    if (!email.includes("@")) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }
    if (numéroDeTéléphone.length < 10) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return;
    }

    // Ici, vous pouvez envoyer les données à un serveur
    // ou effectuer d'autres actions de traitement
    alert("Formulaire soumis avec succès !");

    // Réinitialiser le formulaire ou naviguer vers un autre écran
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactez-nous, on vous répond !</Text>

      {/* Choisir la destination */}
      <Picker
        selectedValue={selectedDestination}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedDestination(itemValue)
        }
        style={styles.input}
      >
        <Picker.Item label="Choisissez une destination" value="" />
        {destinations.map((destination, index) => (
          <Picker.Item
            key={index}
            label={destination.label}
            value={destination.value}
          />
        ))}
      </Picker>

      {/* Champs de formulaire */}
      <TextInput
        placeholder="Nom"
        value={nom}
        onChangeText={(text) => setNom(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Numéro de téléphone"
        value={numéroDeTéléphone}
        onChangeText={(text) => setNuméroDeTéléphone(text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Durée du séjour (en jours)"
        value={durée}
        onChangeText={(text) => setDurée(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Date de départ (JJ/MM/AAAA)"
        value={dateDeDépart}
        onChangeText={(text) => setDateDeDépart(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Nombre de personnes"
        value={nombreDePersonnes}
        onChangeText={(text) => setNombreDePersonnes(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Laissez nous un message :)"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.messageInput]}
      />

      <TouchableOpacity onPress={handleSubmission} style={styles.submitButton}>
        <Text style={styles.buttonText}>Soumettre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
  messageInput: {
    height: 80,
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  backButton: {
    marginTop: 20,
  },
  buttonText: {
    color: "orange",
    fontWeight: "bold",
  },
});
