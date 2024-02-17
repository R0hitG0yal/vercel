import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;

  //temp
  console.log(repoUrl);
  res.json({});
});

app.listen((port: number) => {
  console.log(`listening on ${port}`);
});
