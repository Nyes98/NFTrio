const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openaiConfiguration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(openaiConfiguration);

router.post("/getOpenAIPaint", async (req, res) => {
  const {
    data: { data, created },
  } = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: "512x512",
  });
  res.send({ url: data[0].url, created });
});

module.exports = router;
