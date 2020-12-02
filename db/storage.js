const { json } = require("express")
const fs = require("fs")
const util = require("util")
const readFileasync = util.promisify(fs.readFile)
const writefileasync = util.promisify(fs.writeFile)

class Storage {

    readdb() {

        return readFileasync("db/db.json", "utf8")
    }

    grabNotes() {
        return this.readdb().then((notes) => {
            let dbNotes;
            try {
                dbNotes = [].concat(JSON.parse(notes))

            } catch (err) {
                dbNotes = []
            }
            return dbNotes
        })



    }


}
module.exports = new Storage()