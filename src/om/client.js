import dotenv from "dotenv";
import { createClient } from "redis";
dotenv.config();
const url = process.env.REDIS_URL;
console.log("redis url", url);
export const redis = createClient();
redis.on("error", (error) => console.log(error));
await redis.connect();
