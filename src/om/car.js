import { Repository, Schema } from "redis-om";
import { redis } from "./client.js";

const carSchema = new Schema("car", {
  make: { type: "string" },
  model: { type: "string" },
  year: { type: "number" },
  feautures: { type: "text" },
});

export const carRepository = new Repository(carSchema, redis);
await carRepository.createIndex();
console.log("schema and repository created");
