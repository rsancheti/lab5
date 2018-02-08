var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here

  var name = req.params.name;
  var des = req.params.description;
  var newData = {"name": name, "description": des, "imageURL": "http://lorempixel.com/500/500/people"};
  data.friends.push(newData);
  res.render('index', data);
 }
