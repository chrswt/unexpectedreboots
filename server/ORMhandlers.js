var testSchemas = require('../db/ORM/testSchema/testTable'); 
var ormSchemas = require('../db/ORM/markabeSchema/schemas');

//set up get and set handlers that query the database
var sendBackTestMessages = function(req, res) {
  testSchemas.Message.findAll().then(function(messages) {
    res.send(messages);
  });
};

var saveTestMessage = function(req, res) {
  var text = req.body.text;
  console.log(req.body); // {}
  console.log(text); //undefined
  testSchemas.Message.create({text: text});
  res.send('POST recived');
};

//export handlers
exports.sendBackTestMessages = sendBackTestMessages;
exports.saveTestMessage = saveTestMessage;
