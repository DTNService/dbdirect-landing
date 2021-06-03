import path from "path";

require("dotenv-safe").config({
  allowEmptyValues: true,
  path: path.join(__dirname, "../../.env"),
  sample: path.join(__dirname, "../../.env.example")
});

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
};

export default config;
