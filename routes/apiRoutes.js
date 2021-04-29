const fs = require("fs");
const path = require("path");
const uuid = require("uuid");


// ROUTING
module.exports = (app) => {
    //saves notes + joins db.json
    app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './db/db.json'))
    }};

  //add new notes to db.json
    app.post('/api/notes, (req, res) => {
      if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
      } else {
        waitListData.push(req.body);
        res.json(false);
      }
    });
  
  
  
    app.post('/api/notes', (req, res) => {
      // Empty out the arrays of data
      tableData.length = 0;
      waitListData.length = 0;
  
      res.json({ ok: true });
    });
  };
  
  //deleting notes
  app.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(delNote));
    res.json(delNote);
})