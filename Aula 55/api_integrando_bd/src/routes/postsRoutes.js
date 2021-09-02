const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

// Importando o controller
const postControllers = require("../controllers/postControllers");

// Atualizar as informações de um post
router.put("/:id", postControllers.updatePost);

// Obter todos os posts
router.get("/", postControllers.getAllPosts);

module.exports = router;