const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://azurereactstorage.z9.web.core.windows.net/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send({ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
});

app.listen(PORT, () =>
  console.log(`server listerning on port http://localhost:${PORT}`)
);

module.exports = app;
