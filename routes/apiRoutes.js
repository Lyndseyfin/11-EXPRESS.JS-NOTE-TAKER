const fs = require("fs");
const path = require("path");
const uuid = require("uuid");


// ROUTING
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './db/db.json'))
    }};

  
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
  