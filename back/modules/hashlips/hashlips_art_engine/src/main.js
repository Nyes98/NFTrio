const basePath = process.cwd();
require("dotenv").config({ path: `${basePath}/.env` });

const uuid = require("short-uuid");
const { NETWORK } = require(`../constants/network.js`);
const fs = require("fs");
const sha1 = require(`${basePath}/node_modules/sha1`);
const { createCanvas, loadImage } = require(`${basePath}/node_modules/canvas`);
const { listItemsInFolder } = require("./S3.js");

const DNA_DELIMITER = "-";
const HashlipsGiffer = require(`../modules/HashlipsGiffer.js`);
const { queue } = require("./queue.js");

const bucketUri = process.env.BUCKET_URI || "https://topx-dev.s3.amazonaws.com";
const layersDir = `${basePath}/layers`;

let hashlipsGiffer = null;

class Main {
  constructor(obj) {
    this.configs = { ...obj };
    this.attributesList = [];
    this.buffers = [];
    this.imgLists = [];
    this.metaDataList = [];
    this.canvas = createCanvas(
      this.configs.format.width,
      this.configs.format.height
    );
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = this.configs.format.smoothing;
  }

  checkUniqueEditions = async () => {
    const layersUploaded = await listItemsInFolder(
      `layers/${this.configs.folderName}`
    );
    if (!layersUploaded.length) return { status: false };

    let layerConfigIndex = 0;
    let editionCount = 1;
    let failedCount = 0;
    let abstractedIndexes = [];
    const dnaList = new Set();

    for (
      let i = this.configs.network == NETWORK.sol ? 0 : 1;
      i <=
      this.configs.layerConfigurations[
        this.configs.layerConfigurations.length - 1
      ].growEditionSizeTo;
      i++
    ) {
      abstractedIndexes.push(i);
    }
    /* if (configs.shuffleLayerConfigurations) {
      abstractedIndexes = shuffle(abstractedIndexes);
    } */
    while (layerConfigIndex < this.configs.layerConfigurations.length) {
      const layers = await this.layersSetup(
        this.configs.layerConfigurations[layerConfigIndex].layersOrder
      );
      while (
        editionCount <=
        this.configs.layerConfigurations[layerConfigIndex].growEditionSizeTo
      ) {
        let newDna = this.createDna(layers);
        if (this.isDnaUnique(dnaList, newDna)) {
          dnaList.add(this.filterDNAOptions(newDna));
          editionCount++;
          abstractedIndexes.shift();
        } else {
          failedCount++;
          if (failedCount >= this.configs.uniqueDnaTorrance) {
            return {
              status: false,
              message: `You need more layers or elements to grow your edition to ${this.configs.layerConfigurations[layerConfigIndex].growEditionSizeTo} artworks!`,
            };
          }
        }
      }
      layerConfigIndex++;
    }
    return {
      status: true,
    };
  };

  buildSetup = () => {
    if (fs.existsSync(this.configs.buildDir)) {
      fs.rmdirSync(this.configs.buildDir, { recursive: true });
    }
    fs.mkdirSync(this.configs.buildDir, { recursive: true });
    fs.mkdirSync(`${this.configs.buildDir}/json`);
    fs.mkdirSync(`${this.configs.buildDir}/images`);
    if (this.configs.gif.export) {
      fs.mkdirSync(`${this.configs.buildDir}/gifs`);
    }
  };

  getRarityWeight = (_str) => {
    let nameWithoutExtension = _str.slice(0, -4);
    var nameWithoutWeight = Number(
      nameWithoutExtension.split(this.configs.rarityDelimiter).pop()
    );
    if (isNaN(nameWithoutWeight)) {
      nameWithoutWeight = 1;
    }
    return nameWithoutWeight;
  };

  cleanDna = (_str) => {
    const withoutOptions = this.removeQueryStrings(_str);
    var dna = Number(withoutOptions.split(":").shift());
    return dna;
  };

  cleanName = (_str) => {
    let nameWithoutExtension = _str.slice(0, -4);
    var nameWithoutWeight = nameWithoutExtension
      .split(this.configs.rarityDelimiter)
      .shift();
    return nameWithoutWeight;
  };

  getElements = (path) => {
    return fs
      .readdirSync(path)
      .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
      .map((i, index) => {
        if (i.includes("-")) {
          throw new Error(
            `layer name can not contain dashes, please fix: ${i}`
          );
        }
        return {
          id: index,
          name: this.cleanName(i),
          filename: i,
          path: `${path}${i}`,
          weight: this.getRarityWeight(i),
        };
      });
  };

  layersSetup = (layersOrder) => {
    const layers = layersOrder.map((layerObj, index) => {
      return {
        id: index,
        elements: this.getElements(`${layersDir}/${layerObj.name}/`),
        name:
          layerObj.options?.["displayName"] != undefined
            ? layerObj.options?.["displayName"]
            : layerObj.name,
        blend:
          layerObj.options?.["blend"] != undefined
            ? layerObj.options?.["blend"]
            : "source-over",
        opacity:
          layerObj.options?.["opacity"] != undefined
            ? layerObj.options?.["opacity"]
            : 1,
        bypassDNA:
          layerObj.options?.["bypassDNA"] !== undefined
            ? layerObj.options?.["bypassDNA"]
            : false,
      };
    });
    return layers;
    // const layers = [];
    // console.log("Hellow", await this.getElements(`./`), this.configs.layersDir);
    // for (const [index, layerObj] of layersOrder.entries()) {
    //   const layer = {
    //     id: index,
    //     elements: await this.getElements(`${this.configs.layersDir}/${layerObj.name}`),
    //     name:
    //       layerObj.options?.["displayName"] != undefined
    //         ? layerObj.options?.["displayName"]
    //         : layerObj.name,
    //     blend:
    //       layerObj.options?.["blend"] != undefined
    //         ? layerObj.options?.["blend"]
    //         : "source-over",
    //     opacity:
    //       layerObj.options?.["opacity"] != undefined
    //         ? layerObj.options?.["opacity"]
    //         : 1,
    //     bypassDNA:
    //       layerObj.options?.["bypassDNA"] !== undefined
    //         ? layerObj.options?.["bypassDNA"]
    //         : false,
    //   }
    //   layers.push(layer);
    // }
    return layers;
  };

  saveImage = (_editionCount) => {
    console.log("save image", _editionCount);
    this.buffers.push(this.canvas.toBuffer("image/png"));
    this.imgLists.push(_editionCount);
    // fs.writeFileSync(
    //   `${this.configs.buildDir}/images/${_editionCount}.png`,
    //   this.canvas.toBuffer("image/png")
    // );
  };

  genColor = () => {
    let hue = Math.floor(Math.random() * 360);
    let pastel = `hsl(${hue}, 100%, ${this.configs.background.brightness})`;
    return pastel;
  };

  drawBackground = () => {
    this.ctx.fillStyle = this.configs.background.static
      ? this.configs.background.default
      : this.genColor();
    this.ctx.fillRect(
      0,
      0,
      this.configs.format.width,
      this.configs.format.height
    );
  };

  addMetadata = (metadataList, _dna, _edition, _imageId, _supply) => {
    let dateTime = Date.now();
    const { namePrefix, description, baseUri, color, set, series, artist } =
      this.configs;
    let tempMetadata = {
      name: `${namePrefix} #${_edition}`,
      description,
      color,
      set,
      series,
      artist_name: artist,
      img: `${baseUri}/${_imageId}.png`,
      dna: sha1(_dna),
      supply: _supply,
      edition: _edition,
      date: dateTime,
      ...this.configs.extraMetadata,
      attributes: this.attributesList,
    };
    if (this.configs.network == NETWORK.sol) {
      tempMetadata = {
        //Added metadata for solana
        name: tempMetadata.name,
        symbol: this.configs.extraMetadata.symbol,
        description: tempMetadata.description,
        //Added metadata for solana
        seller_fee_basis_points:
          this.configs.extraMetadata.seller_fee_basis_points,
        image: `${_imageId}.png`,
        //Added metadata for solana
        external_url: this.configs.extraMetadata.external_url,
        edition: _edition,
        ...this.configs.extraMetadata,
        attributes: tempMetadata.attributes,
        properties: {
          files: [
            {
              uri: `${_edition}.png`,
              type: "image/png",
            },
          ],
          category: "image",
          creators: this.configs.extraMetadata.creators,
        },
      };
    }
    metadataList.push(tempMetadata);
    this.attributesList = [];
  };

  addAttributes = (_element) => {
    let selectedElement = _element.layer.selectedElement;
    this.attributesList.push({
      trait_type: _element.layer.name,
      value: selectedElement.name,
    });
  };

  loadLayerImg = async (_layer) => {
    try {
      return new Promise(async (resolve) => {
        try {
          const image = await loadImage(`${_layer.selectedElement?.path}`);
          resolve({ layer: _layer, loadedImage: image });
        } catch (error) {
          console.log("ERROR WHILE LOADING");
          console.log(error);
          const image = await loadImage(`${_layer.selectedElement?.path}`);
          resolve({ layer: _layer, loadedImage: image });
        }
      });
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };

  addText = (_sig, x, y, size) => {
    this.ctx.fillStyle = this.configs.text.color;
    this.ctx.font = `${this.configs.text.weight} ${size}pt ${this.configs.text.family}`;
    this.ctx.textBaseline = this.configs.text.baseline;
    this.ctx.textAlign = this.configs.text.align;
    this.ctx.fillText(_sig, x, y);
  };

  drawElement = (_renderObject, _index, _layersLen) => {
    this.ctx.globalAlpha = _renderObject.layer.opacity;
    this.ctx.globalCompositeOperation = _renderObject.layer.blend;
    this.configs.text.only
      ? addText(
          `${_renderObject.layer.name}${this.configs.text.spacer}${_renderObject.layer.selectedElement.name}`,
          this.configs.text.xGap,
          this.configs.text.yGap * (_index + 1),
          this.configs.text.size
        )
      : this.ctx.drawImage(
          _renderObject.loadedImage,
          0,
          0,
          this.configs.format.width,
          this.configs.format.height
        );

    this.addAttributes(_renderObject);
  };

  constructLayerToDna = (_dna = "", _layers = []) => {
    let mappedDnaToLayers = _layers.map((layer, index) => {
      let selectedElement = layer.elements.find(
        (e) => e.id == this.cleanDna(_dna.split(DNA_DELIMITER)[index])
      );
      return {
        name: layer.name,
        blend: layer.blend,
        opacity: layer.opacity,
        selectedElement: selectedElement,
      };
    });
    return mappedDnaToLayers;
  };

  /**
   * In some cases a DNA string may contain optional query parameters for options
   * such as bypassing the DNA isUnique check, this function filters out those
   * items without modifying the stored DNA.
   *
   * @param {String} _dna New DNA string
   * @returns new DNA string with any items that should be filtered, removed.
   */
  filterDNAOptions = (_dna) => {
    const dnaItems = _dna.split(DNA_DELIMITER);
    const filteredDNA = dnaItems.filter((element) => {
      const query = /(\?.*$)/;
      const querystring = query.exec(element);
      if (!querystring) {
        return true;
      }
      const options = querystring[1].split("&").reduce((r, setting) => {
        const keyPairs = setting.split("=");
        return { ...r, [keyPairs[0]]: keyPairs[1] };
      }, []);

      return options.bypassDNA;
    });

    return filteredDNA.join(DNA_DELIMITER);
  };

  /**
   * Cleaning function for DNA strings. When DNA strings include an option, it
   * is added to the filename with a ?setting=value query string. It needs to be
   * removed to properly access the file name before Drawing.
   *
   * @param {String} _dna The entire newDNA string
   * @returns Cleaned DNA string without querystring parameters.
   */
  removeQueryStrings = (_dna) => {
    const query = /(\?.*$)/;
    return _dna.replace(query, "");
  };

  isDnaUnique = (_DnaList = new Set(), _dna = "") => {
    const _filteredDNA = this.filterDNAOptions(_dna);
    return !_DnaList.has(_filteredDNA);
  };

  createDna = (_layers) => {
    let randNum = [];
    _layers.forEach((layer) => {
      var totalWeight = 0;
      layer.elements.forEach((element) => {
        totalWeight += element.weight;
      });
      // number between 0 - totalWeight
      let random = Math.floor(Math.random() * totalWeight);
      for (var i = 0; i < layer.elements.length; i++) {
        // subtract the current weight from the random weight until we reach a sub zero value.
        random -= layer.elements[i].weight;
        if (random < 0) {
          return randNum.push(
            `${layer.elements[i].id}:${layer.elements[i].filename}${
              layer.bypassDNA ? "?bypassDNA=true" : ""
            }`
          );
        }
      }
    });
    return randNum.join(DNA_DELIMITER);
  };

  writeMetaData = (_data) => {
    fs.writeFileSync(`${this.configs.buildDir}/json/_metadata.json`, _data);
  };

  saveMetaDataSingleFile = (metadataList, _editionCount) => {
    let metadata = metadataList.find((meta) => meta.edition == _editionCount);
    this.configs.debugLogs
      ? console.log(
          `Writing metadata for ${_editionCount}: ${JSON.stringify(metadata)}`
        )
      : null;
    fs.writeFileSync(
      `${this.configs.buildDir}/json/${_editionCount}.json`,
      JSON.stringify(metadata, null, 2)
    );
  };

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  startCreating = async (_imageName) => {
    let layer;
    this.buffers = [];
    console.log("STARTTTT", this.configs.layerConfigurations);

    let layerConfigIndex = 0;
    let editionCount = 1;
    let failedCount = 0;
    let abstractedIndexes = [];
    const metadataList = [];
    const dnaList = new Set();

    for (
      let i = this.configs.network == NETWORK.sol ? 0 : 1;
      i <=
      this.configs.layerConfigurations[
        this.configs.layerConfigurations.length - 1
      ].growEditionSizeTo;
      i++
    ) {
      abstractedIndexes.push(i);
    }
    if (this.configs.shuffleLayerConfigurations) {
      abstractedIndexes = this.shuffle(abstractedIndexes);
    }
    this.configs.debugLogs
      ? console.log("Editions left to create: ", abstractedIndexes)
      : null;
    while (layerConfigIndex < this.configs.layerConfigurations.length) {
      const layers = await this.layersSetup(
        this.configs.layerConfigurations[layerConfigIndex].layersOrder
      );
      while (
        editionCount <=
        this.configs.layerConfigurations[layerConfigIndex].growEditionSizeTo
      ) {
        let newDna = this.createDna(layers);
        if (this.isDnaUnique(dnaList, newDna)) {
          let results = this.constructLayerToDna(newDna, layers);
          let loadedElements = [];

          results.forEach((layer) => {
            loadedElements.push(this.loadLayerImg(layer));
          });

          await Promise.all(loadedElements).then(async (renderObjectArray) => {
            this.configs.debugLogs ? console.log("Clearing canvas") : null;
            this.ctx.clearRect(
              0,
              0,
              this.configs.format.width,
              this.configs.format.height
            );
            if (this.configs.gif.export) {
              hashlipsGiffer = new HashlipsGiffer(
                this.canvas,
                this.ctx,
                `${this.configs.buildDir}/gifs/${abstractedIndexes[0]}.gif`,
                this.configs.gif.repeat,
                this.configs.gif.quality,
                this.configs.gif.delay
              );
              hashlipsGiffer.start();
            }
            if (this.configs.background.generate) {
              this.drawBackground();
            }
            renderObjectArray.forEach((renderObject, index) => {
              this.drawElement(
                renderObject,
                index,
                this.configs.layerConfigurations[layerConfigIndex].layersOrder
                  .length
              );
              if (this.configs.gif.export) {
                hashlipsGiffer.add();
              }
            });
            if (this.configs.gif.export) {
              hashlipsGiffer.stop();
            }
            this.configs.debugLogs
              ? console.log("Editions left to create: ", abstractedIndexes)
              : null;
            const imageId = uuid.generate();
            this.saveImage(_imageName);

            const supplyCount = 1;
            this.addMetadata(
              metadataList,
              newDna,
              abstractedIndexes[0],
              _imageName,
              supplyCount
            );
            // this.saveMetaDataSingleFile(metadataList, abstractedIndexes[0]);
            // await queue.add({
            //   filePath: `${this.configs.buildDir}/images/${imageId}.png`,
            //   fileName: `${imageId}.png`,
            //   folderName: this.configs.folderName,
            //   editionCount: this.configs.layerConfigurations[layerConfigIndex].growEditionSizeTo,
            // });
            console.log(
              `Created edition: ${abstractedIndexes[0]}, with DNA: ${sha1(
                newDna
              )}`
            );
          });
          dnaList.add(this.filterDNAOptions(newDna));
          editionCount++;
          abstractedIndexes.shift();
        } else {
          console.log("DNA exists!");
          failedCount++;
          if (failedCount >= this.configs.uniqueDnaTorrance) {
            console.log(
              `You need more layers or elements to grow your edition to ${this.configs.layerConfigurations[layerConfigIndex].growEditionSizeTo} artworks!`
            );
            return false;
          }
        }
      }
      layerConfigIndex++;
    }
    this.metaDataList = metadataList;
    // this.writeMetaData(JSON.stringify(metadataList, null, 2));
    return true;
  };
}

//module.exports = { startCreating, buildSetup, getElements, layersSetup, createDna, isDnaUnique, filterDNAOptions, initVariables };
module.exports = Main;
