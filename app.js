const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const encryptCardData = require("./src/encrypt");

app.get("/", async (req, res) => {
  const cc = req.query.cc;
  const mes = req.query.mes;
  const ano = req.query.ano;
  const cvv = req.query.cvv;
  const context = req.query.context;
  const x = await encryptCardData(cc, mes, ano, cvv, context);
  res.send(x);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
