require('dotenv').config({ path: `${process.cwd()}/.env` });
const AWS = require('aws-sdk')

let S3 = null;
const initS3 = ({ accessKeyId, secretAccessKey }) => {
  if (S3) {
    console.log('S3 already initialized');
    return S3;
  }
  S3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    signatureVersion: 'v4',
  })
  return S3
}

const listItemsInFolder = async (folderName = '') => {
  try {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Prefix: folderName,
    }
    const data = await S3.listObjects(params).promise()
    return data.Contents?.map((item) => item.Key) || []
  } catch (error) {
    return []
  }
}

module.exports = {
  initS3,
  listItemsInFolder,
}
