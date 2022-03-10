import express from "express";
import controller from "./content.controller.js";
const router = express.Router()

router.get('/content', controller.getContent)
router.post('/content', controller.createContent)
router.put('/content', controller.updateContent)
router.delete('/content/:id', controller.deleteContent) 

export default router