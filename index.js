var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readdir('./instruction','utf-8', function(err, files) {
	console.log(files);
	files.forEach(function (file) {
        fs.writeFile("./saved/new.txt", file, 'utf8', function(err){
            if(err) {
                return console.log(err);
            }
        });
        console.log(file);
      
	});
});
