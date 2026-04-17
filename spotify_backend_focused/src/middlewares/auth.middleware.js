const jwt = require("jsonwebtoken");

// create middleware , 3 parameters are required
async function authArtist(req, res , next){

    const token = req.cookies.token;
    
        if(!token){
            return res.status(401).json({message: "unauthorized"})
        }
    
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
            if(decoded.role !== "artist"){
                return res.status(403).json({message: "You don't have access to create an music"})
            }


            // req.user is our custon property we are creating

            req.user = decoded; // for artist in music conroller // we can access the  ser in or controller

            next()
          
        } catch (err) {

        console.log(err);
        

        return res.status(401).json({message: "Unathorized"})
        }

}

async function authUser(req, res , next) {

    const token = req.cookies.token;

    if(!token){
            return res.status(401).json({message: "unauthorized"})
        }
    
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // if(decoded.role !== "user" && decoded.role !== "artist"){
            if(decoded.role !== "user" ){ // user profiles can access the musics // for learning role based authentication use this line
                return res.status(403).json({message: "You don't have access"})
            }

            req.user = decoded;

            next()

        } catch (err) {

            console.log(err);
            

            return res.status(401).json({message: "Unathorized"})
        }

}


module.exports = {authArtist, authUser};


//  use of next
// router.post("/upload", authMiddleware.authArtist, upload.single("music"),musicController.createMusic)

// our file middlewar but fo not go to multer part to move are process to it we need to use next()
// else the request will not move out from middleware