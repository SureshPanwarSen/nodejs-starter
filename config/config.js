const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "allnodes"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/allnodes-development",
    esDb: "localhost:9200"
  },

  test: {
    root: rootPath,
    app: {
      name: "allnodes"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/allnodes-test",
    esDb: "localhost:9200"
  },

  production: {
    root: rootPath,
    app: {
      name: "allnodes"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/allnodes-production",
    esDb: "localhost:9200"
  }
};

module.exports = config[env];
