const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig,
    resolver: {
      assetExts: ['jpg', 'jpeg', 'png', 'gif', 'mp3', 'wav', 'ttf', 'otf'],
    },
    // Autres configurations personnalisées ici
  };
})();
