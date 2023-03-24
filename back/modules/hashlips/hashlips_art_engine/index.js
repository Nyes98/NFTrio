const Main = require(`./src/main.js`);
const { initConfigs } = require(`./src/config.js`);
const { getRarity } = require('./utils/rarity')
// const { connectQueue } = require(`./src/queue.js`);
const { initS3 } = require(`./src/S3.js`);
const { checkUniqueEditions } = require('./utils/editions')

function HashLipsGenerator(itemsObj, configObj, s3) {
  this.configs = initConfigs({ ...itemsObj, ...configObj });
  this.generator = new Main(this.configs);

  return this.generator;
  
  // initS3(s3obj);
  /* initVariables(this.configs);
  buildSetup();
  
  initS3(s3obj);
  this.startCreating = async () => startCreating();
  this.getRarity = () => getRarity(this.configs); */
}

module.exports = {
  HashLipsGenerator,
  // connectQueue,
};
