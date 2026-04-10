// server ko start karna server.js ka kaam hain
// the folder structure till now is 5 percent of production level still 95 percent is remaining

const app = require("./src/app") // whatever is exported in now here






app.listen(3000,()=>{ // callback for whenever the server is successfully started
    console.log("server is running on port 3000");
})