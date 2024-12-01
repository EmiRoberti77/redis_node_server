import express from "express";
import cors from "cors";
import { router as carRouter } from "./routers/car-router.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/car", carRouter);
app.listen(8000, () => console.log("server started"));
