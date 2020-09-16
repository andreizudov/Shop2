const express = require("express")
const hbs = require("hbs")
const app = express ()
const expressHbs = require("express-handlebars")

app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.set("view engine", 'hbs')

hbs.registerPartials(__dirname+"views/partials")

app.use(express.static('public'))


app.use("/shop", function (req,res)
{ res.render ('shop.hbs', {
    title: "Покупки",
    mainInfo: "какая то картинка"
})})

app.use("/", function(req,res){
    res.render('main.hbs',{
        title: "Главная",
        mainInfo: "Добро пожаловать в наш магазин",
    })
})

app.listen(2000);
console.log("Server start")