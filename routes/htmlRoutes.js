// dependencies
const path = require("path");

// routing
module.exports = (app) => {
// handles when users "visits" a page...the user is shown an HTML page of content
  app.get("/notes", (req, res) => {index
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  // If no matching route is found default to 
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};