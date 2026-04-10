// server ko start karna server.js ka kaam hain

const app = require("./src/app") // whatever is exported in now here






app.listen(3000,()=>{ // callback for whenever the server is successfully started
    console.log("server is running on port 3000");
})