const PIXI = require("pixi.js");
const dotenv = require("dotenv");
dotenv.config();
const { s3 } = require("../multer");

const HashLipsArtEngine = require("hashlips_art_engine");

const configObj = {
  folderName: "nftrio",
  format: {
    width: 256,
    height: 256,
    smoothing: false,
  },
  baseUri: "https://nftrio-bucket.s3.ap-northeast-2.amazonaws.com",
  description: "nftrio-character",
  background: {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
  },
  uniqueDnaTorrance: 10000,
  layerConfigurations: [
    {
      growEditionSizeTo: 1,
      layersOrder: [
        { name: "Fox_Outline" },
        { name: "Fox_Nose" },
        { name: "Fox_Ear" },
        { name: "Fox_Eye" },
        { name: "Fox_EyeDeco" },
        { name: "Fox_FaceDeco" },
      ],
    },
  ],
  rarityDelimiter: "#",
  preview: {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: 1,
    imageName: "preview.png",
  },
  shuffleLayerConfigurations: false,
  debugLogs: true,
  extraMetadata: {},
  pixelFormat: {
    ratio: 2 / 128,
  },
  text: {
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
  namePrefix: "NFTrio Collection",
  solanaMetadata: {
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
  gif: {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
  },
  preview_gif: {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
  },
};

const gen = HashLipsArtEngine.HashLipsGenerator(configObj, configObj, s3);

const genCreate = async (_imageName) => {
  gen.buildSetup();
  await gen.startCreating(_imageName);
  const bucketName = "nftrio-bucket";
  gen.imgLists.map((item, index) => {
    const key = item;
    const bufferImage = gen.buffers[index];
    const params = {
      Bucket: bucketName,
      Key: key + ".png",
      Body: bufferImage,
    };
    s3.putObject(params, (err, data) => {
      if (err) {
      } else {
        console.log("putSuccess");
      }
    });
  });
  s3.putObject(
    {
      Bucket: bucketName,
      Key: gen.imgLists[0] + ".json",
      Body: JSON.stringify(gen.metaDataList, null, 2),
    },
    (err, data) => {
      console.log("metadataPut Sucess");
    }
  );
};

module.exports = { genCreate };
