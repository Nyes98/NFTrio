const router = require("express").Router();
require("../modules/hashlips/hashlips.js");

const {
  upload,
  getObject,
  getObjectList,
  uploadFile,
} = require("../modules/multer");

router.post("/image", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.status(200).json({ url: req.file.location });
});

router.post("/getObject", async (req, res) => {
  const curUrl = await getObject(req.body.url);
  console.log("asdfasdf", curUrl);
  res.send(curUrl);
});

router.post("/getObjectList", async (req, res) => {
  let curList = await getObjectList();
  curList = curList.filter((item) => !item.toString().includes(".json"));
  console.log(curList);
  res.send(curList);
});

module.exports = router;
