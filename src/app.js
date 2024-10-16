const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// public static path
const staticPath =  path.join(__dirname, '../public');
const templates_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');
// console.log(path.join(__dirname,"../templates"));

app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

// routing 
app.get("", (req, res)=>{
    res.render('index');
});

app.get("/about", (req, res)=>{
    res.render('about');
});

app.get("/weather", (req, res)=>{
    res.render('weather');
});

app.get("*", (req, res)=>{
    res.render('404');
});

app.listen(port, ()=>{
    console.log(`Listening on //localhost:${port}\nSleeping...`);
});



