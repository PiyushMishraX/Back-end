const musicModel = require("../models/music.model")
const {uploadFile} = require("../services/storage.service")
const jwt = require("jsonwebtoken")




async function createMusic(req,res){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: "unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            // return res.status(403).json({message: "Forbidden"})
            return res.status(403).json({message: "You don't have access to create an music"})
        }
        
    } catch (err) {
        return res.status(401).json({message: "Unathorized"})
    }


    const {title} =  req.body;




}