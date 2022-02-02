import dbConnect from "../../../connection/mongo";
import Food from "../../../models/Food";

export default async function handler(req, res) {
  const { method,
    query:{id} 
        } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const food = await Food.findById(id);
        res.status(201).json(food);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "PUT":
      try {
        const food = await Food.create(req.body);

        res.status(201).json(food);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
    case "DELETE":
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
