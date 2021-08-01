const https = require("https");

export default (_req, _res) => {
  const options = {
    hostname: "watasalim.vercel.app",
    port: 443,
    path: "/api/quotes/random",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      _res.send(JSON.parse(d)["quote"]["body"]);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
};
