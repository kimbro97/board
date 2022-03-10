import express from "express";

import content from "./content/index.js";

const router = express.Router()

router.use('/contents', content)

export default router