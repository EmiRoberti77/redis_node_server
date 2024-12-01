import { Router } from "express";
import { carRepository } from "../om/car.js";
import { EntityId } from "redis-om";
import { redis } from "../om/client.js";

export const router = Router();

router.put("/", async (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const car = await carRepository.save(req.body);
  res.status(200).json({
    id: car[EntityId],
    saved: car,
  });
});
router.get("/:id", async (req, res) => {
  //http://localhost:8000/car/01JE1JG547C78RMBKTT0JXEEAF
  console.log("id", req.params.id);
  const car = await carRepository.fetch(req.params.id);
  res.status(200).json({
    car,
  });

  //http://localhost:8000/car/car:01JE1JG547C78RMBKTT0JXEEAF
  // const car = await redis.json.get(req.params.id);
  // res.status(200).json({ car });
});

router.post("/", (req, res) => {
  res.status(200).json({
    httpMethod: "POST",
  });
});
