const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;
//const port = 8000;

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
hbs.registerPartials(partials_path);
app.set('views', template_path);


app.use(express.static(static_path));

app.get("", (req, res) => {

    res.render('index.hbs');

})

//routing
app.get("/about", (req, res) => {

    res.render('about.hbs');

})
app.get("/weather", (req, res) => {

    res.render('weather');

})
app.get("*", (req, res) => {

    res.render('404error', {
        errorMsg: 'Opps ! Page not found, click here to go back'

    })

})



app.listen(port, () => {

    console.log(`listening to the port${port}`);
})