import dbConnect from "../../../connection/mongo";
import Food from "../../../models/Food";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const foods = await Food.find();
        res.status(201).json(foods);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "POST":
      try {
        
        const food = await Food.create(req.body);

        res.status(201).json(food);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
  }
}
