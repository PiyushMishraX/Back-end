const app = require("./src/app")
const connectDB = require("./src/db/db")


const dns = require("dns")
// change dns here instead of in pc 
dns.setServers(["1.1.1.1","8.8.8.8"]);

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000")
});


// connectDB()
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("Server running on port 3000");
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to connect to DB:", err);
//     process.exit(1); // Stop the process if DB connection fails
//   });