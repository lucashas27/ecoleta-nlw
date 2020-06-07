


//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") //cria um bd nesse caminho

module.exports = db

// utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {  
    // 1- criar uma tabela com comandos sql

  // db.run(`
   //    CREATE TABLE IF NOT EXISTS places (
   //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT, 
    //        name TEXT,
     //       address TEXT,
     //       address2 TEXT,
    //        state TEXT,
     //       city TEXT,
     //       items TEXT
    //    );
   // `)

  
 //  const query = `
    //  INSERT INTO places (
    //  image,
    //  name,
      //  address,
      //  address2,
      //  state,
      //  city,
      //   items
      //  ) VALUES (?,?,?,?,?,?,?);
    // `

  // const values = [
    //   "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   "Papersider",
    //   "Guilherme Gemballa, Jardim América",
   //    "Número 260",
    //   "Santa Catarina",
   //    "Rio do Sul",
    //   "Resíduos Eletrônicos, Lâmpadas"
   // ]

   // function afterInsertData(err) {
   //     if (err) {
    //     return console.log(err)
 //  }

  //     console.log("Cadastrado com sucesso!")
   //  console.log(this)
//}

// consultar os dados da tabela

// db.all(`SELECT name FROM places`, function(err, rows) {

  //  if (err) {
  //      return console.log(err)

 //   }

 //   console.log("Aqui estão os seus registros")
//    console.log(rows)




// })

// db.run(query, values, afterInsertData)



// deletar dado da tabela

// db.run(`DELETE FROM places WHERE id = ?`, [9], function(err) {
//       if (err) {
//        return console.log(err)
//    }
//    console.log ("Registro deletado com sucesso")

//    })


//})