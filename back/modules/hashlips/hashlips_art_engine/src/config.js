const basePath = process.cwd();

require('dotenv').config({ path: `${basePath}/.env` });

const { NETWORK } = require(`../constants/network.js`);
const bucketUri = process.env.BUCKET_URI || 'https://topx-dev.s3.amazonaws.com';

const initConfigs = ({
  name,
  description,
  color,
  set,
  series,
  artist,
  supply,
  baseUri,
  folderName,
  layerConfigurations,
  solanaMetadata,
  network,
  shuffleLayerConfigurations,
  debugLogs,
  format,
  gif,
  text,
  pixelFormat,
  background,
  extraMetadata,
  rarityDelimiter,
  uniqueDnaTorrance,
  preview,
  preview_gif
}) => {
  return {
    namePrefix: name,
    description,
    color,
    set,
    series,
    artist,
    supply: supply || [],
    baseUri,
    buildDir: `${basePath}/generated/${folderName}/build`,
    layersDir: `${bucketUri}/layers/${folderName}/layers`,
    folderName,
    layerConfigurations,
    solanaMetadata: solanaMetadata || {
      symbol: "YC",
      seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
      external_url: "https://www.youtube.com/c/hashlipsnft",
      creators: [
        {
          address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
          share: 100,
        },
      ],
    },
    network: network || NETWORK.eth,
    shuffleLayerConfigurations: shuffleLayerConfigurations || false,
    debugLogs: debugLogs || false,
    format: format || {
      width: 512,
      height: 512,
      smoothing: false,
    },
    gif: gif || {
      export: false,
      repeat: 0,
      quality: 100,
      delay: 500,
    },
    text: text || {
      only: false,
      color: "#ffffff",
      size: 20,
      xGap: 40,
      yGap: 40,
      align: "left",
      baseline: "top",
      weight: "regular",
      family: "Courier",
      spacer: " => ",
    },
    pixelFormat: pixelFormat || {
      ratio: 2 / 128,
    },
    background: background || {
      generate: true,
      brightness: "80%",
      static: false,
      default: "#000000",
    },
    extraMetadata: extraMetadata || {},
    rarityDelimiter: rarityDelimiter || "#",
    uniqueDnaTorrance: uniqueDnaTorrance || 10000,
    preview: preview || {
      thumbPerRow: 5,
      thumbWidth: 50,
      imageRatio: format ? format.height / format.width : 1,
      imageName: "preview.png",
    },
    preview_gif: preview_gif || {
      numberOfImages: 5,
      order: "ASC", // ASC, DESC, MIXED
      repeat: 0,
      quality: 100,
      delay: 500,
      imageName: "preview.gif",
    }
  }
}

module.exports = {
  initConfigs,
};
