const { imageKit} = require("@imagekit/nodejs")

//  image kit install - npm install @imagekit/nodejs

const ImageKitCLient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})


async function uploadFile() {
    const result = await ImageKitCLient.files.upload({
        file,
        fileName:"music_" + Date.now(),
        folder: "spotify_project_backend/music"
    })    

    return result;
}


module.exports = { uploadFile};