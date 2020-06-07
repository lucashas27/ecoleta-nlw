const express = require("express") // pegou o express
const server = express() // guardou o express


// configurar pasta publica
server.use(express.static("public"))




// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", { // pasta q estão os HTMLs, 
    express: server,              // qual é o servidor express
    noCache: true                 // não deixar em cache enquanto desenvolve
})




// configurar caminhos da minha aplicação

//página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {  //faz a rota do index 
    return res.render("index.html", { title: "Seu marketplace de coleta de resíduos" }) // está no h1 do index
})
server.get("/create-point", (req, res) => { // faz a rota do create point
    return res.render("create-point.html")
})
server.get("/search", (req, res) => { // faz a rota do search results
    return res.render("search-results.html")
})


// ligar o servidor
server.listen(3000)
