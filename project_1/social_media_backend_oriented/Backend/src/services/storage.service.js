const ImageKit =  require("@imagekit/nodejs")

const imagekit = new ImageKit({

    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
    // with private key a person can upload and delete the things on the account and the person want to use imagekit have to pay for the sotrage the key shoul din in env
}) 

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({ // our client is imagekit
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadFile