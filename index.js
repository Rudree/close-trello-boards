"use strict";
var Trello = require('node-trello');
var t = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);

module.exports = function() {
  t.get("/1/members/username", (error, body) => {
    if(!error) {
      let ids = body.idBoards.filter(id => id !== ""); //filter board id, not need to be deleted
      ids.forEach(id => {
        t.put(`/1/boards/${id}/closed`,{ value: true }, (error, body) => {console.log(body);});
      });
    }
  });
}
