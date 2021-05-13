const express = require('express');

const app = express();

app.get('/', function(req,res) {
    res.send("Reached here");
})

app.get('/asish/:id', function(req,res) {
    const id = req.params.id
    res.send("My name is Asish" + id)
})
app.listen(3000, function(req,res) {
    console.log("running...");
});