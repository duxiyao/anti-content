const myres = require("./res");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(8888, () => {
  console.log("Application started and Listening on port 8888");
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({
        anti_result: myres.getAntiContent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0')
    })
});