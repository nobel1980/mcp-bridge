// src/resources/index.ts

import express from "express";
import { getSystemInfo } from "./systemResource.js";

const router = express.Router();

router.get("/system", (_, res) => {
    res.json(getSystemInfo());
});

export default router;