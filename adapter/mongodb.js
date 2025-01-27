// server/utils/mongo.ts
const { MongoClient } = require("mongodb");

const config = require("../config");

class Mongo {
  // private client: MongoClient;

  constructor() {
    if (this.client) {
      return this.client;
    }

    const uri = config.MONGO_URI;

    console.log("uri", process.env.MONGO_URI);

    const options = {};
    this.client = new MongoClient(uri, options);
  }

  async close() {
    return this.client.close();
  }

  async getCollection(name) {
    return this.client.db("Shop").collection(name);
  }
}

module.exports = { mongo: new Mongo() };
