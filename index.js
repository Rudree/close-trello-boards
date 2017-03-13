"use strict";
var Trello = require('node-trello');
var t = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);

module.exports = function() {
  t.get("/1/members/rudreetrivedi1", (error, body) => {
    if(!error) {
      console.log(body);
    }
  });
}
