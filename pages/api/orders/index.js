import dbConnect from "../../../connection/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const orders = await Order.find();
        res.status(201).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "POST":
      try {
        const order = await Order.create(req.body);

        res.status(201).json(order);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
  }
}
