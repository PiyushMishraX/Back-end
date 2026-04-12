const ImageKit =  require("@imagelit/nodejs")

const imagekit = new ImageKit({

    privateKey: "key"
}) 

async function uploadFile(buffer) {

    const result = await imagekit.client.upload({
        file: buffer,
        fileName: "image.jpg"
    })

    return result;
}

modue.exports = uploadFile