const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const {uploadFile} = require("../services/storage.service")
const jwt = require("jsonwebtoken")




// async function createMusic(req,res){

//     const token = req.cookies.token;

//     if(!token){
//         return res.status(401).json({message: "unauthorized"})
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)

//         if(decoded.role !== "artist"){
//             // return res.status(403).json({message: "Forbidden"})
//             return res.status(403).json({message: "You don't have access to create an music"})
//         }
        
//     const {title} =  req.body;
//     const file = req.file;

//     const result = await uploadFile(file.buffer.toString('base64'))
 
//     const music = await musicModel.create({
//         uri: result.url,
//         title,
//         artist: decoded.id,

//     })
//     res.status(201).json({
//         message: "Music createdd successfully",
//         music:{
//             id: music._id,
//             uri: music.uri,
//             title: music.title,
//             artist: music.artist,
//         }
//     })


//     } catch (err) {

//         console.log(err);
        

//         return res.status(401).json({message: "Unathorized"})
//     }


// }


// async function createAlbum(req,res){
//     const token = req.cookies.token;

//     if(!token){
//         return res.status(401).json({message: "unauthorized "})
//     }

//     try {

//         const decoded = jwt.verify(token, process.env.JWT_SECRET)

//         if(decoded.role !== "artist"){
//             return res.status(403).json({message: "You don't have access to create an music"})
//         }

//         const { title, musics} = req.body;

//         const album = await albumModel.create({
//             title,
//             artist: decoded.id,
//             musics: musics,
//         })

//         res.status(201).json({
//             message: "Album created successfully",
//             album: {
//                 id: album._id,
//                 title: album.title,
//                 artist: album.artist,
//                 music: album.musics,
//             },
//         })
        
//     } catch (err) {
//         console.log(err);
//         return res.status(401).json({message: "Unauthorized"})          
//     }





// }





async function createMusic(req,res){
   
        
    const {title} =  req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))
 
    const music = await musicModel.create({
        uri: result.url,
        title,
        // artist: decoded.id,
        artist: req.user.id,

    })
    res.status(201).json({
        message: "Music createdd successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })


}


async function createAlbum(req,res){

        const { title, musics} = req.body;

        const album = await albumModel.create({
            title,
            // artist: decoded.id,
            artist: req.user.id,
            musics: musics,
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                music: album.musics,
            },
        })
        

}


async function getAllMusics(req, res) {

    // const musics = await musicModel.find()
    // const musics = await musicModel.find().populate("artist") // give details of artist too
    const musics = await musicModel.find().populate("artist","username email") // only username and email of artist

    res.status(200).json({
        message: "Musics fetched successflly",
        musics: musics,
    })
    
}

async function getAllAlbums(req, res) {

    const albums = await albumModel.find().populate("artist", "username email").populate("musics")

    res.status(200).json({
        message: "Message fetched suucessfully",
        albums: albums
    })
    
}




module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums };



// middlware will handle the token part and automatically when the api iss called