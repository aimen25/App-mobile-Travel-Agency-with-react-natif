import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";
import { destinationData, filterDestinationsByCategory } from "../constants";
import { useNavigation } from "@react-navigation/native";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState(""); // Ajoutez un état pour stocker la recherche
  const [searchResults, setSearchResults] = useState([]); // Ajoutez un état pour stocker les résultats de la recherche

  const handleSearch = () => {
    // Implémentez la logique de recherche ici en utilisant la valeur de searchQuery
    const results = destinationData.filter((destination) =>
      destination.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const filteredDestinations = filterDestinationsByCategory(
    destinationData,
    activeCategory
  );

  // Utilisez searchResults s'il y a des résultats de recherche, sinon, utilisez toutes les destinations
  const destinationsToDisplay = searchResults.length > 0 ? searchResults : filteredDestinations;

  const renderDestinations = () => {
    if (destinationsToDisplay.length === 0) {
      return (
        <Text className="text-red-500 text-center">
          Aucune destination trouvée. Veuillez essayer une autre recherche.
        </Text>
      );
    } else {
      return <Destinations data={destinationsToDisplay} />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6 " + topMargin}
      >
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
          >
            Découvrons
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Trouvez votre destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
              onChangeText={(text) => setSearchQuery(text)} // Mettez à jour la recherche lors de la saisie
              onSubmitEditing={handleSearch} // Déclenchez la recherche lors de l'appui sur "Entrée"
            />
          </View>
        </View>

        <View className="mb-4">
          <Categories />
        </View>

        <View className="mb-4">
          <SortCategories setActiveCategory={setActiveCategory} />
        </View>

        <View className="mb-4">{renderDestinations()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
