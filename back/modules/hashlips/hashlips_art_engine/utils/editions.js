const { NETWORK } = require(`../constants/network.js`);
const { listItemsInFolder } = require('../src/S3.js');
const { layersSetup, createDna, isDnaUnique, filterDNAOptions } = require('../src/main')

const checkUniqueEditions = async (configs) => {
  const layersUploaded = await listItemsInFolder(`layers/${configs.folderName}`);
  if (!layersUploaded.length) return { status: false };

  let layerConfigIndex = 0;
  let editionCount = 1;
  let failedCount = 0;
  let abstractedIndexes = [];
  const dnaList = new Set();

  for (
    let i = configs.network == NETWORK.sol ? 0 : 1;
    i <= configs.layerConfigurations[configs.layerConfigurations.length - 1].growEditionSizeTo;
    i++
  ) {
    abstractedIndexes.push(i);
  }
  /* if (configs.shuffleLayerConfigurations) {
    abstractedIndexes = shuffle(abstractedIndexes);
  } */
  while (layerConfigIndex < configs.layerConfigurations.length) {
    const layers = await layersSetup(
      configs.layerConfigurations[layerConfigIndex].layersOrder, configs
    );
    while (
      editionCount <= configs.layerConfigurations[layerConfigIndex].growEditionSizeTo
    ) {
      let newDna = createDna(layers);
      if (isDnaUnique(dnaList, newDna)) {
        dnaList.add(filterDNAOptions(newDna));
        editionCount++;
        abstractedIndexes.shift();
      } else {
        failedCount++;
        if (failedCount >= configs.uniqueDnaTorrance) {
          return {
            status: false,
            message: `You need more layers or elements to grow your edition to ${configs.layerConfigurations[layerConfigIndex].growEditionSizeTo} artworks!`,
          }
        }
      }
    }
    layerConfigIndex++;
  }
  return {
    status: true
  };
};

module.exports = { checkUniqueEditions };