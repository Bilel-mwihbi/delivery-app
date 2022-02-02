import dbConnect from "../../../connection/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();
        res.status(201).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "POST":
      try {
        const product = await Product.create(req.body);

        res.status(201).json(product);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
  }
}
