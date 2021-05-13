var xyz = require('http')

xyz.createServer(function(req,res) {
    res.write("naveen reddy")
    res.end()
}).listen(3000)