const PIXI = require("pixi.js");
const dotenv = require("dotenv");
dotenv.config();
const { s3 } = require("../multer");

const HashLipsArtEngine = require("./hashlips_art_engine/index.js");

const configObj = {
  folderName: "nftrio",
  format: {
    width: 128,
    height: 152,
    smoothing: false,
  },
  baseUri: "https://nftrio-bucket2.s3.ap-northeast-2.amazonaws.com",
  description: "nftrio-character",
  background: {
    generate: false,
    brightness: "80%",
    static: false,
    default: "#000000",
  },
  uniqueDnaTorrance: 10000,
  layerConfigurations: [
    {
      growEditionSizeTo: 1,
      layersOrder: [
        { name: "Maple_Skin" },
        { name: "Maple_Hair" },
        { name: "Maple_Face" },
        { name: "Maple_Cloth" },
        { name: "Maple_Weapon" },
        { name: "Maple_Glove" },
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
  const create = await gen.startCreating(_imageName);
  console.log(create, gen.buffers[0]);
  const bucketName = "nftrio-bucket2";
  const bufferPromise = new Promise((resolve, reject) => {
    const key = gen.imgLists[0];
    const bufferImage = gen.buffers[0];
    const params = {
      Bucket: bucketName,
      Key: key + ".png",
      Body: bufferImage,
    };
    s3.putObject(params, (err, data) => {
      if (err) {
      } else {
        s3.putObject(
          {
            Bucket: bucketName,
            Key: gen.imgLists[0] + ".json",
            Body: JSON.stringify(gen.metaDataList, null, 2),
          },
          (err, data) => {
            if (data) {
              let count = 0;
              const checkMetaData = () => {
                count++;
                console.log("metadataPut Sucess", bufferImage);
                if (bufferImage) {
                  return true;
                } else return false;
              };
              const timeOutId = setTimeout(() => {
                if (checkMetaData()) {
                  resolve(bufferImage);
                  clearTimeout(timeOutId);
                } else {
                  if (count >= 10) reject(bufferImage);
                }
              }, 1000);
            } else {
              reject(bufferImage);
            }
          }
        );
      }
    });
  });
  return bufferPromise;
};

module.exports = { genCreate };
