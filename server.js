const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/serv/"));

app.get("/*", (_, res) => {
  res.sendFile(`${__dirname}/serv/index.html`, null, (err) => {
    if (err) console.error(err);
  });
});

app.listen(PORT, function () {
  console.log(`Приложение запущено на порту  ${PORT}!`);
});
