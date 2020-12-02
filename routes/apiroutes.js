const app = require("express").Router()
const storage = ("../db/storage")
    // it grabs funcion that we create in storage.js

app.get("/notes", (req, res) => {
    storage.grabNotes().then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err))


});

// else {
//     waitListData.push(req.body);
//     res.json(false);
// }
// });


// app.post("/api/clear", function(req, res) {

//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
// });
module.exports = app