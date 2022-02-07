import dbConnect from "../../../connection/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id);
        res.status(201).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "PUT":
      try {
        const product = await Product.create(req.body);

        res.status(201).json(product);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
    case "DELETE":
      try {
         await Product.findByIdAndDelete(id);

        res.status(201).json("product has been removed");
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
  }
}
