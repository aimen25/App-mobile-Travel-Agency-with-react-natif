export const sortCategoryData = ["Sans visa", "Avec visa"];

export const categoriesData = [

  {
    title: "Afrique",
    image: require("../../assets/images/af.jpg"),
    category: sortCategoryData[0], // "Sans visa"
  },
  {
    title: "Europe",
    image: require("../../assets/images/eu.jpg"),
    category: sortCategoryData[1], // "Avec visa"
  },
  {
    title: "Asie",
    image: require("../../assets/images/as.jpg"),
    category: sortCategoryData[0], // "Avec visa"
  },
  {
    title: "Amérique",
    image: require("../../assets/images/am.jpg"),
    category: sortCategoryData[1], // "Avec visa"
  },
  {
    title: "Montagne",
    image: require("../../assets/images/montagne.jpg"),
  },
  {
    title: "Plage",
    image: require("../../assets/images/plage.jpg"),
  },
  {
    title: "Ville",
    image: require("../../assets/images/ville.jpg"),
  },
];


export const destinationData = [
    {
      title: "Paris",
      duration: "12 Jours",
      feature: "Centre historique",
  
      price: 1399,
      
      longDescription:
        "Paris est une ville emblématique, réputée pour son art, son architecture et sa romance. Explorez des sites tels que la tour Eiffel et le Louvre tout en plongeant dans la culture française.",
      image: require("../../assets/images/bali.jpg"),
      category: "Avec visa",
      continent: "Europe",
    },
    {
      title: "Rome",
      duration: "7 Jours",
      feature: "Sites antiques",
  
      price: 1299,
      
      longDescription:
        "Rome, avec son Colisée majestueux et ses places animées, est une destination incontournable. Découvrez l'histoire romaine tout en dégustant une délicieuse cuisine italienne.",
      image: require("../../assets/images/rome.jpg"),
      category: "Avec visa",
      continent: "Europe",
    },
    {
      title: "Antalya",
      duration: "5 Jours",
      feature: "Plages méditerranéennes",
  
      price: 999,
      
      longDescription:
        "Antalya, avec ses plages pittoresques et ses vestiges antiques, offre une escapade parfaite. Profitez du soleil méditerranéen et découvrez l'hospitalité turque.",
      image: require("../../assets/images/2.jpg"),
      category: "Sans visa",
      continent: "Asie",

    },
    {
      title: "Sharm el Sheikh",
      duration: "34 Jours",
      feature: "Plongée sous-marine",
  
      price: 1099,
      
      longDescription:
        "Sharm el Sheikh, sur les rives de la mer Rouge, est réputée pour ses sites de plongée spectaculaires. Explorez les récifs coralliens et découvrez la beauté sous-marine de la région.",
      image: require("../../assets/images/sheikh.jpg"),
      category: "Sans visa",
      continent: "Afrique"
    },
    {
      title: "Hammamet",
      duration: "8 Jours",
      feature: "Plages de sable fin",
  
      price: 799,
     
      longDescription:
        "Hammamet, avec son charme méditerranéen, est une destination prisée pour ses plages paradisiaques et ses souks animés. Découvrez la culture tunisienne tout en vous relaxant au bord de la mer.",
      image: require("../../assets/images/1.jpg"),
      category: "Sans visa",
      continent: "Afrique"
    },
    {
      title: "Barcelone",
      duration: "10 Jours",
      feature: "Architecture moderniste",
  
      price: 1299,
      
      longDescription:
        "Barcelone, avec la Sagrada Familia et le parc Güell, est un chef-d'œuvre architectural. Plongez-vous dans la vie espagnole, explorez les marchés et dégustez des tapas authentiques.",
      image: require("../../assets/images/BAR.jpg"),
      category: "Avec visa",
      continent: "Europe"
    },
    {
      title: "Zanzibar",
      duration: "9 Jours",
      feature: "Plages de corail blanc",
  
      price: 1199,
     
      longDescription:
        "Zanzibar, avec ses plages idylliques et son mélange unique de cultures, est une escapade tropicale. Explorez les ruelles de Stone Town et détendez-vous sur les plages de sable fin.",
      image: require("../../assets/images/zin.jpg"),
      category: "Sans visa",
      continent: "Afrique"
    },
    {
      title: "Bali",
      duration: "14 Jours",
      feature: "Rizières en terrasses",
  
      price: 2399,
    
      longDescription:
        "Bali, avec sa culture spirituelle et sa beauté naturelle, offre une expérience unique. Explorez les temples hindous, randonnez dans les rizières verdoyantes et détendez-vous sur les plages paradisiaques.",
      image: require("../../assets/images/paris.jpg"),
      category: "Sans visa",
      continent: "Asie"
    },
    {
      title: "Philippines",
      duration: "18 Jours",
      feature: "Plongée avec requins-baleines",
  
      price: 1799,
   
      longDescription:
        "Les Philippines, avec leurs récifs coralliens préservés, sont un paradis pour les amateurs de plongée. Explorez la vie marine colorée et découvrez la diversité de cet archipel tropical.",
      image: require("../../assets/images/PHI.jpg"),
      category: "Sans visa",
      continent: "Asie"
    },
    {
      title: "Dubai",
      duration: "10 Jours",
      feature: "Architecture futuriste",
  
      price: 1099,
   
      longDescription:
        "Dubai, avec ses innovations architecturales et son extravagance, est une destination unique. Montez au sommet du Burj Khalifa, explorez les marchés traditionnels et profitez du luxe dans le désert.",
      image: require("../../assets/images/DU.jpg"),
      category: "Sans visa",
      continent: "Asie"
    },
   
     
    
  ];
  export const filterDestinationsByCategory = (destinations, category) => {
    if (category === "Sans visa") {
      return destinations.filter((destination) => destination.category === "Sans visa");
    } else if (category === "Avec visa") {
      return destinations.filter((destination) => destination.category === "Avec visa");
    } else {
      return destinations;
    }
  };