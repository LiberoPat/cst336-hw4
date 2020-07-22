const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const faker = require('faker');


//routes

/*
app.get("/", function(req,res){
    res.render("index.html");
   // someDate: faker.date.past();
});
*/

app.get("/index", function(req, res){
    res.render('index.ejs', {
        someDate: faker.date.past()
    });

});


app.get("/manifesto", function(req,res){
    res.render("manifesto.html");
});

app.get("/principle", function(req,res){
    res.render("principle.html");
});

app.get("/scrum", function(req,res){
    res.render("scrum.html");
});

app.get("/index", function(req,res){
    res.render("index.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});