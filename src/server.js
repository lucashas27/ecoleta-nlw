const express = require("express") // pegou o express
const server = express() // guardou o express


// pegar o banco de dados
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))


//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))


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

// req.query: Query Strings da nossa url
console.log(req.query)



    return res.render("create-point.html",) //



})

server.post("/savepoint", (req, res) => {


    

 //req.body: O corpo do nosso formulário   
// console.log(req.body)


// inserir dados no banco de dados

 const query = `
     INSERT INTO places (
     image,
     name,
       address,
       address2,
       state,
       city,
       items
       ) VALUES (?,?,?,?,?,?,?);
    `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
   ]


   function afterInsertData(err) {
       if (err) {
        return res.send("Erro no cadastro")
  }

    console.log("Cadastrado com sucesso!")
    console.log(this)

    return res.render("create-point.html", {saved: true})

}


db.run(query, values, afterInsertData)


// fim


})




server.get("/search", (req, res) => { // faz a rota do search results

    const search = req.query.search
    if(search == "") {
        // pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }




// pegar os dados no DB
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) { // like = pra pegar palavras proximas

   if (err) {
       return console.log(err)

   }

    const total = rows.length


   // mostrar a página html com os dados do banco de dados
   return res.render("search-results.html", {places: rows, total: total})

    })

})

// ligar o servidor
server.listen(3000)

