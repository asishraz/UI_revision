var fs = require('fs')

fs.readFile('app.js','utf8',function(err,data) {
    console.log(data);
    
})


fs.appendFile('app.js','console.log("hello there");',function(err) {
    console.log("data saved");
    
})

fs.unlink('new.js', function(err) {
    console.log("deleted");
})