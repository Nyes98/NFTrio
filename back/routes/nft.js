const router = require("express").Router();

const db = require("../models");

const TOKENCOUNT = 1000;
const { User, Character, NFTMarket } = require("../models");
const { genCreate } = require("../modules/hashlips/hashlips.js");
const { changeObjectKey, getJsonObject } = require("../modules/multer.js");

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
// genCreate("imimimi");

const getNftCount = async () => {
  const data = await Character.findAndCountAll();
  return data;
};

/**
 * @param {number} _page
 * 몇 번째 페이지를 보여줄 것인가?
 * @param {number} _pageLen
 * 페이지 마다 몇 개의 아이템을 보여줄것인가?
 * @param {number} _job
 * 직업에 해당하는 숫자를 적어준다.
 * 0이라면 직업에따른 정렬을 하지 않겠다는 뜻이다.
 * @param {number} _price
 * 0이면 가격에 따른 정렬을 하지 않겠다는 뜻이다.
 * 1이면 가격에 따른 오름차순 정렬을 의미한다.
 * 2이면 가격에 따른 내림차순 정렬을 의미한다.
 * @returns
 */
const getLatestNft = async (_page, _pageLen, _job, _price) => {
  let whereCondition = {};

  if (_job != 0) {
    whereCondition = { job: _job };
  }

  let orderCondition = [["createdAt", "DESC"]];

  if (_price == 1) {
    orderCondition = [["price", "ASC"]];
  } else if (_price == 2) {
    orderCondition = [["price", "DESC"]];
  }

  const data = await Character.findAll({
    where: whereCondition,
    order: orderCondition,
    offset: _page * _pageLen,
    limit: _pageLen,
  });

  return data;
};

/**
 * @returns DB의 모든캐릭터 정보를 반환한다.
 */
const getAll = async () => {
  const data = await Character.findAll();
  return data;
};

const getNftInfo = async (_hash) => {
  const data = await Character.findOne({
    where: { hash: _hash },
  });
  return data;
};

const getMyNft = async (_owner) => {
  const data = await Character.findAll({
    where: { owner_address: _owner },
  });

  return data;
};

const SellNft = async (_price, _hash) => {
  console.log(_price, _hash);
  const data = await NFTMarket.create({
    price: _price,
  });

  const hashData = await Character.findOne({
    where: { hash: _hash },
  });

  Character.update(
    {
      price: _price,
    },
    {
      where: { hash: _hash },
    }
  );

  hashData.addRegistSellList(data);
  return data;
};

router.post("/recentAll", async (req, res) => {
  const data = await getLatestNft(
    req.body.page,
    req.body.pageLen,
    req.body.job,
    req.body.priceFilter
  );
  res.send(data);
});

router.post("/nftCount", async (req, res) => {
  const data = await getNftCount();
  res.send(data);
});

router.post("/all", async (req, res) => {
  const data = await getAll();
  res.send(data);
});

router.post("/nftInfo", async (req, res) => {
  const data = await getNftInfo(req.body.hash);
  res.send(data);
});

router.post("/myNft", async (req, res) => {
  const data = await getMyNft(req.body.owner);
  res.send(data);
});

router.post("/sellNft", async (req, res) => {
  const data = await SellNft(req.body.price, req.body.selHash);
  res.send(data);
});
// genCreate("임의의 해쉬값");

const pinataSDK = require("@pinata/sdk");
const Web3 = require("web3");
const multer = require("multer");
const { Readable } = require("stream");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const web3 = new Web3(
  "wss://goerli.infura.io/ws/v3/5b7557d9e628400c80aff9dafb24fe45"
);
const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);
const upload = multer();
const saleToken = require("../contracts/artifacts/SaleToken.json");
const characterToken = require("../contracts/artifacts/CharacterToken.json");
const trioToken = require("../contracts/artifacts/TrioToken.json");
const swapToken = require("../contracts/artifacts/Swap.json");
const { env } = require("process");

router.post("/list", async (req, res) => {
  // 03.22 확인 결과 이놈이 잘못되고있다.
  console.log(req.body.from);

  const deployed = new web3.eth.Contract(saleToken.abi, process.env.SALE_CA);
  // 토큰의 계약정보를 deployed에 담고 있다.

  let data = [];
  if (req.body.from) {
    try {
      // console.log("아이고난", await deployed.methods);
      const tempArr = await deployed.methods
        .getOwnerTokens(req.body.from)
        .call();
      console.log("tempArr", tempArr); // 여기까진 로그찍힘
      console.log("length", tempArr.length);
      for (let i = 0; i < tempArr.length; i++) {
        console.log("for문 들어옴", tempArr[i].tokenURI);
        try {
          const {
            data: { image, name, description },
          } = await axios.get(tempArr[i].tokenURI);
          console.log("구조분해할당", image, name, description);
          data.push({
            tokenId: tempArr[i].tokenId,
            price: tempArr[i].price,
            name,
            description,
            image: image,
          });
        } catch (error) {
          console.log("Error");
        }
      }
      console.log("data", data);
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

router.post("/nftMint", async (req, res) => {
  const { name, description, from } = req.body;

  const ticket = User.findOne({
    where: { address: from },
  });
  console.log(ticket.mintNumber);

  console.log(req.body);
  // HashLips 이미지 생성 후 이미지 버퍼값

  const createdBuffer = await genCreate(name);
  const imgResult = await pinata.pinFileToIPFS(Readable.from(createdBuffer), {
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
      // attributes: [
      //   { trait_type: "job", value: "전사" },
      //   { trait_type: "gender", value: "여자" },
      //   { trait_type: "attack", value: "100" },
      //   { trait_type: "health", value: "2000" },
      //   { trait_type: "speed", value: "5" },
      //   { trait_type: "skill", value: "double attack" },
      //   { trait_type: "price", value: "2000TRIO" },
      // ],
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
  // 피나타에 이미지가 올라가고 난후 ipfsHash가 정해지면 s3에 올라간 이미지 값의 이름을 ipfsHash값으로 바꿔준다.
  await changeObjectKey(name + ".png", imgResult.IpfsHash + ".png");
  await changeObjectKey(name + ".json", imgResult.IpfsHash + ".json");
  // 값이 모두 완성되면 mySql에도 저장해준다.
  const json = await getJsonObject(imgResult.IpfsHash);
  console.log(json[4].value);
  console.log(jsonResult);
  let characterName;
  let job = json[4].value.split(" ")[1];
  switch (job) {
    case "Axe":
      characterName = `전사-${Date.now()}호기`;
      job = 1;
      break;
    case "Katana":
      characterName = `도적-${Date.now()}호기`;
      job = 2;
      break;
    case "Cane":
      charcterName = `법사-${Date.now()}호기`;
      job = 3;
      break;
    default:
      characterName = `킹갓직업-${Date.now()}호기`;
      job = 0;
      break;
  }
  const owner_address = from;
  console.log("ADDRESSS", owner_address);
  const characterTokenConfig = {
    hash: imgResult.IpfsHash,
    img: `https://nftrio-bucket2.s3.ap-northeast-2.amazonaws.com/${imgResult.IpfsHash}.png`,
    name: characterName,
    job: job,
    gender: Math.floor(Math.random() * 2),
    attack: Math.floor(Math.random() * 2),
    health: Math.floor(Math.random() * 2),
    speed: Math.floor(Math.random() * 2),
    skill: Math.floor(Math.random() * 2),
    price: 0,
    tokenId: TOKENCOUNT,
  };
  const curUser = await User.findOne({
    where: {
      address: owner_address,
    },
  });
  const curCharacter = await Character.create(characterTokenConfig);
  curUser.addCharacter(curCharacter);

  const deployed = new web3.eth.Contract(
    characterToken.abi,
    process.env.CHAR_CA // ERC721 CA
  );

  const obj = {
    nonce: 0,
    to: "",
    from: "",
    data: "",
  };
  obj.nonce = await web3.eth.getTransactionCount(req.body.from);
  // 얘는 goeril 사용 시 넣으면 터지니까 빼야된다. nonce
  obj.to = process.env.CHAR_CA;
  obj.from = req.body.from;
  obj.data = deployed.methods.safeMint(jsonResult.IpfsHash).encodeABI();

  res.send({ obj, characterTokenConfig });
});

router.post("/addTokenId", async (req, res) => {
  const addTokenId = await Character.update(
    {
      tokenId: parseInt(req.body.tokenId, 16),
    },
    {
      where: { tokenId: TOKENCOUNT },
    }
  );
  res.send("Well Done");
});

router.post("/trade", async (req, res) => {
  const abi = swapToken.abi;
  const deployed = new web3.eth.Contract(
    abi,
    process.env.SWAP_CA
    // swap token CA
  );
  let temp = await deployed.methods.buyToken().encodeABI();
  res.send({ data: temp, to: process.env.SWAP_CA });
});

router.post("/approve", async (req, res) => {
  const deployed = new web3.eth.Contract(
    characterToken.abi,
    process.env.CHAR_CA
  );

  const approve = {
    data: "",
    to: "",
  };

  approve.data = await deployed.methods
    .setApprovalForAll(process.env.SALE_CA, true)
    .encodeABI();
  approve.to = process.env.CHAR_CA;
  res.send(approve);
});

router.post("/saleToken", async (req, res) => {
  const deployed = new web3.eth.Contract(saleToken.abi, process.env.SALE_CA);

  const obj = {
    to: "",
    from: "",
    data: "",
  };

  obj.to = process.env.SALE_CA;
  obj.from = req.body.account;
  obj.data = await deployed.methods
    .SalesToken(req.body.tokenId, web3.utils.toWei(req.body.price, "ether"))
    // 웨이를 바꾸는 부분이 필요하다. 등록자체도 웨이 기준으로 받고 있다. 그래서 트리오 기준으로 바꿔주는 *10 ** 18 작업이 필요할 것이다.
    // 숫자로 받으면 고장난다?? 이 말이 제가 토큰 판매 올릴때 135로 올리면 0.005 => 0.004거나 3이거나 6인경우처럼 이상하게 될 수 있다. 소숫점 단위로 넘어가면
    .encodeABI();
  res.send(obj);
});

router.post("/getSaleList", async (req, res) => {
  const deployed = new web3.eth.Contract(saleToken.abi, process.env.SALE_CA);
  let data = [];
  try {
    const tempArr = await deployed.methods.getSaleTokenList().call();
    console.log("판매길이", tempArr.length);
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
        console.log("보낼 데이터", data);
      } catch (error) {}
    }
    res.send(data);
  } catch (error) {}
});

router.post("/approvePurchase", (req, res) => {
  console.log(req.body.from, req.body.price);
  const deployed = new web3.eth.Contract(trioToken.abi, process.env.TRIO_CA);
  const obj = {
    from: "",
    to: "",
    data: "",
  };
  obj.from = req.body.from;
  obj.to = process.env.TRIO_CA; // 데이터를 수정할 사람
  obj.data = deployed.methods
    .approve(process.env.SALE_CA, req.body.price)
    .encodeABI();
  res.send(obj);
});

router.post("/purchaseToken", (req, res) => {
  console.log(req.body.tokenId); // 잘 받아옴
  console.log(req.body.from);
  const deployed = new web3.eth.Contract(saleToken.abi, process.env.SALE_CA);

  const obj = {
    from: "",
    to: "",
    data: "",
  };
  obj.from = req.body.from;
  obj.to = process.env.SALE_CA;
  obj.data = deployed.methods.PurchaseToken(req.body.tokenId).encodeABI();
  console.log("거래메서드", obj.data);
  res.send(obj);
});

module.exports = router;

// 모든 nft의 권한을 가지고 있다. 바로 판매할 수 있도록 => 로그인을 할 때 권한 부여

// 매번 nft에 대한 하나의 권한을 받아올지

// 처음에 판매를 할 때 판매자의 권한을 받아올지
