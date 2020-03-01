var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readdir('./instruction','utf-8', function(err, files) {
    fs.writeFile("./saved/new.txt", files, 'utf8', function(err){
        if(err) {
            return console.log(err);
        }
    });
});
