const { mongo } = require("../adapter/mongodb");

class ProductController {
  constructor(parameters) {}

  static async getAllProducts(req, res) {
    try {
      const collection = await mongo.getCollection("products");

      const products = await collection.find({}).toArray();

      res.send(products);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductController;
