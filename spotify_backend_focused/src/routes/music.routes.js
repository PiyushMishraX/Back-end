const express = require('express');

const musicController = require("../controllers/music.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const multer = require('multer');




const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();


// POST /api/music/upload -> request goes to server instance in app.js then the inital /api/music is matched and that file is started then-> /upload is matched
// in it first the middleware runs than multer than controller

router.post("/upload", authMiddleware.authArtist, upload.single("music"),musicController.createMusic)

router.post("/album", authMiddleware.authArtist, musicController.createAlbum)

router.get("/", authMiddleware.authUser, musicController.getAllMusics)

router.get("/albums", authMiddleware.authUser, musicController.getAllAlbums )


module.exports = router;