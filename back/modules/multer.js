const aws = require("aws-sdk");
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require("fs");
const dotenv = require("dotenv");
const { Character } = require("../models");
dotenv.config();

const REGION = "ap-northeast-2";
const bucketName = "nftrio-bucket2";
const bucketParams = { Bucket: bucketName };
const s3 = new aws.S3({
  region: REGION,
  accessKeyId: "AKIA4YWDJOLB5TIUNXGC",
  secretAccessKey: "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",
});
const s3Admin = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: "AKIA4YWDJOLB5TIUNXGC",
    secretAccessKey: "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",
  },
});

// S3 저장소 버켓 생성
const createBucket = (_bucketName) => {
  const params = {
    Bucket: _bucketName,
    CreateBucketConfiguration: {
      LocationConstraint: REGION,
    },
  };
  s3.createBucket(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log("Bucket Created Successfully", data.Location);
  });
};

const changeObjectKey = async (_objectName, _changedName) => {
  const copyInfo = {
    Bucket: bucketName,
    CopySource: `/${bucketName}/${_objectName}`,
    Key: _changedName,
  };
  const deleteInfo = {
    Bucket: bucketName,
    Key: _objectName,
  };
  const changePromise = new Promise((resolve, reject) => {
    s3.copyObject(copyInfo, (err, data) => {
      if (data) {
        console.log("ChangeObjectKey Data", data);
        s3.deleteObject(deleteInfo, (err, data) => {
          console.log("ChangeObjectKey Finish");
          resolve(`${_objectName} -> ${_changedName} NameChange Success`);
        });
      } else {
        console.log("ChangeObjectKey Error");
        reject(`${_objectName} -> ${_changedName} NameChange Error`);
      }
    });
  });
  return changePromise;
};

// S3에 파일 업로드 (_fileName: S3상의 저장위치, )
const uploadFile = (_fileName, _fileDir) => {
  const fileContent = fs.readFileSync(_fileDir);
  const params = {
    Bucket: bucketName,
    Key: _fileName,
    Body: fileContent,
  };
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
// uploadFile("ATag.png", "./imgs/ATag.png");

// s3의 이미지 오브젝트 주소 반환
const getObject = async (_image) => {
  const url2 =
    s3.endpoint.protocol +
    "//nftrio-bucket2." +
    s3.endpoint.host +
    "/" +
    _image;

  return url2;
};

const getJsonObject = async (_jsonName) => {
  const params = { Bucket: bucketName, Key: _jsonName + ".json" };
  const jsonPromise = new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const attributes = JSON.parse(data.Body.toString())[0].attributes;
        resolve(attributes);
      }
    });
  });
  return jsonPromise;
};

// s3의 이미지 오브젝트 리스트 반환
const getObjectList = async () => {
  try {
    const data = await s3Admin.send(new ListObjectsCommand(bucketParams));
    const urlList = [];
    data.Contents.map((item) => {
      urlList.push(item.Key);
    });
    console.log(urlList);
    return urlList;
  } catch (err) {
    console.log("Error", err);
  }
};

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucketName,
    // acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
      const newFileName = (file.originalname = Buffer.from(
        file.originalname,
        "latin1"
      ).toString("utf-8"));
      cb(null, `${newFileName}`);
    },
  }),
});

module.exports = {
  upload,
  getObject,
  uploadFile,
  getObjectList,
  changeObjectKey,
  getJsonObject,
  s3,
};
