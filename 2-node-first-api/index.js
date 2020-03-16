// Built-in Libraries
const http = require("http");

http
  .createServer((req, res) => {
    const url = req.url;

    if (url.includes("/now")) {
      res.write(new Date(Date.now()).toLocaleString());
      res.end();
    } else {
      res.write("Hello World");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server started at Port 3000");
  });
