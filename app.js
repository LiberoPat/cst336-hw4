const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const faker = require('faker');
var someDate = faker.date.past();

//routes
app.get("/", function(req,res){
    res.render("index.ejs", {"someDate":faker.date.past()});
  
});

app.get("/manifesto", function(req,res){
     res.render("manifesto.ejs", {"someDate":faker.date.past()});
});

app.get("/principle", function(req,res){
     res.render("principle.ejs", {"someDate":faker.date.past()});
});

app.get("/scrum", function(req,res){
     res.render("scrum.ejs", {"someDate":faker.date.past()});
});


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});