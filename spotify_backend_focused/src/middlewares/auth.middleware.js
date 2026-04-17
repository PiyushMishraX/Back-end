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

            next()
          
        } catch (err) {

        console.log(err);
        

        return res.status(401).json({message: "Unathorized"})
        }

}

module.exports = {authArtist};

//  use of next
// router.post("/upload", authMiddleware.authArtist, upload.single("music"),musicController.createMusic)

// our file middlewar but fo not go to multer part to move are process to it we need to use next()
// else the request will not move out from middleware