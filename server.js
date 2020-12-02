var express = require("express");
// import API routes and html routes
const htmlroutes = require("./routes/htmlroutes")
const apiroutes = require("./routes/apiroutes")
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use("/", htmlroutes)
app.use("/api", apiroutes)

// app.use /index
// app.use api routs




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));