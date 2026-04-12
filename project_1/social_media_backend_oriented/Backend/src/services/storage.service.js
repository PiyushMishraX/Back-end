const ImageKit =  require("@imagekit/nodejs")

const imagekit = new ImageKit({

    privateKey: "key"
}) 

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({ // our client is imagekit
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadFile