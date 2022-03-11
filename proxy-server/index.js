import express from "express";
import proxy from "express-http-proxy";

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/api", proxy("http://localhost:3001")); //server

app.use("/", proxy("http://localhost:3000"));//client

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
