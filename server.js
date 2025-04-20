// server.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // make sure this file exists!
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
