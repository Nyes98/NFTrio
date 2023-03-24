const aws = require("aws-sdk");
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const REGION = "ap-northeast-2";
const bucketName = "nftrio-bucket";
const bucketParams = { Bucket: bucketName };
const s3 = new aws.S3({
  region: REGION,
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
});
const s3Admin = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
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
    s3.endpoint.protocol + "//nftrio-bucket." + s3.endpoint.host + "/" + _image;

  return url2;
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
getObjectList();

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

module.exports = { upload, getObject, uploadFile, getObjectList, s3 };
