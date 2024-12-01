import { Router } from "express";
import { carRepository } from "../om/car.js";
import { EntityId } from "redis-om";

export const router = Router();

router.put("/", async (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const car = await carRepository.save(req.body);
  res.status(200).json({
    id: car[EntityId],
    saved: car,
  });
});
router.get("/", (req, res) => {
  res.status(200).json({
    httpMethod: "GET",
  });
});
router.post("/", (req, res) => {
  res.status(200).json({
    httpMethod: "POST",
  });
});
