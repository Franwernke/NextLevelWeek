const proffys = [
    {
        name: "Francisco Wernke", 
        avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQEq7Lm63XNVqw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=Ggb75mIDQlqFsmgcMLRVfoDVWdrMtxtchW6kG9Voqwk", 
        whatsapp: "11945538999", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20,00",
        weekday: [0],
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Daniela Evangelista", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "(11)91234-5678", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20,00",
        weekday: [1],
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Ciências",
    "Biologia",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades
function getSubject(subjectNumber) {
    return subjects[+subjectNumber-1];
}

// Get Views
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query;

    const notEmpty = Object.keys(data).length > 0;
    // Adiciona dados a lista de proffys
    if (notEmpty) {

        data.subject = getSubject(data.subject)
        
        proffys.push(data)
        console.log('got here')
        // Vai pra nova página de estudos
        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express');
const server = express();

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

// Início e configuração do servidor
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Porta da aplicação (Start)
.listen(5500);