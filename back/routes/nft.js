const router = require("express").Router();

const { User, Character, NFTMarket } = require("../models");

const mint = async ({
  hash,
  img,
  name,
  job,
  gender,
  attack,
  health,
  speed,
  skill,
  owner_address,
}) => {
  const newCharacter = await Character.create({
    hash,
    img,
    name,
    job,
    gender,
    attack,
    health,
    speed,
    skill,
  });
  const curOwner = await User.findOne({
    where: {
      address: owner_address,
    },
  });
  newCharacter.addUser(curOwner);
};

router.post("/mint", (req, res) => {
  mint({ ...req.body });
  res.send("mint success");
});

const pinataSDK = require("@pinata/sdk");
const Web3 = require("web3");
const multer = require("multer");
const { Readable } = require("stream");
const dotenv = require("dotenv");

dotenv.config();

const web3 = new Web3("http://ganache.test.errorcode.help:8545");
console.log(process.env.API_Key);
const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);
const upload = multer();
const saleToken = require("../build/contracts/SaleToken.json");
const characterToken = require("../build/contracts/CharacterToken.json");
const trioToken = require("../build/contracts/TrioToken.json");
const swapToken = require("../build/contracts/Swap.json");
const { env } = require("process");

router.post("/list", async (req, res) => {
  console.log(req.body.from);

  const deployed = new web3.eth.Contract(saleToken.abi, process.env.SALE_CA);
  // 토큰의 계약정보를 deployed에 담고 있다.

  let data = [];
  if (req.body.from) {
    try {
      const tempArr = await deployed.methods
        .getOwnerTokens(req.body.from)
        .call();
      for (let i = 0; i < tempArr.length; i++) {
        try {
          const { name, description, image } = (
            await axios.get(tempArr[i].tokenURI)
          ).data;
          data.push({
            tokenId: tempArr[i].tokenId,
            price: tempArr[i].price,
            name,
            description,
            image: image,
          });
        } catch (error) {}
      }
    } catch (error) {}
  } else {
    try {
      const tempArr = await deployed.methods.getSaleTokenList().call();
      console.log(tempArr);
      for (let i = 0; i < tempArr.length; i++) {
        try {
          const { name, description, image } = (
            await axios.get(tempArr[i].tokenURI)
          ).data;
          data.push({
            tokenId: tempArr[i].tokenId,
            price: tempArr[i].price,
            name,
            description,
            image: image,
          });
        } catch (error) {}
      }
    } catch (error) {}
  }
  res.send(data);
});

router.post("/mint", upload.single("file"), async (req, res) => {
  const { name, description } = req.body;
  console.log(req.body);

  const imgResult = await pinata.pinFileToIPFS(Readable.from(req.file.buffer), {
    pinataMetadata: {
      name: Date.now().toString(),
    },
    pinataOptions: {
      cidVersion: 0,
    },
  });
  console.log("이미지", imgResult);

  if (imgResult.isDuplicate) {
    console.log("같은 이미지!");
  }

  const jsonResult = await pinata.pinJSONToIPFS(
    {
      name,
      description,
      image: `https://gateway.pinata.cloud/ipfs/${imgResult.IpfsHash}`,
    },
    {
      pinataMetadata: {
        name: Date.now().toString() + ".json",
      },
      pinataOptions: {
        cidVersion: 0,
      },
    }
  );
  console.log(jsonResult);

  const deployed = new web3.eth.Contract(
    characterToken.abi,
    process.env.CHAR_CA
  );

  const obj = {
    nonce: 0,
    to: "",
    from: "",
    data: "",
  };
  obj.nonce = await web3.eth.getTransactionCount(req.body.from);
  obj.to = process.env.CHAR_CA;
  obj.from = req.body.from;
  obj.data = deployed.methods.safeMint(jsonResult.IpfsHash).encodeABI();

  res.send(obj);
});

router.post("/trade", async (req, res) => {
  const abi = swapToken.abi;
  const deployed = new web3.eth.Contract(
    abi,
    "0x1c1702A63eC949748B9C1e99733b7cc2EeD0d3c4"
    // swap token CA
  );
  console.log(req.body.account);
  let token = await deployed.methods.getSwapBalance().call();
  let temp = await deployed.methods.buyToken().encodeABI();
  console.log("구매", temp);
  res.send({ data: temp, to: "0x1c1702A63eC949748B9C1e99733b7cc2EeD0d3c4" });
});
const temp = async () => {
  const abi = swapToken.abi;

  const deployed = new web3.eth.Contract(
    abi,
    "0x1c1702A63eC949748B9C1e99733b7cc2EeD0d3c4"
  );
  let temp = await deployed.methods.buyToken().encodeABI();
  console.log("구매", temp);
};
// temp();

module.exports = router;
