const express = require("express");
const bp = require('body-parser')
var cors = require("cors");
const app = express();
const port = 3000;
app.use(bp.json())
app.use(cors());

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ifstudies",
});


con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => res.send("Hello World!"));



//--------------QUESTOES-----------

//Tudo da Tabela Questões

app.get("/tbquestoes", (req, res) => {
  con.query("SELECT * FROM tbquestoes", function (err, result) { 

      if (err) { 
  
          res.send(err); 
  
      } 
  
      res.send(result); 
  
  }); 
});




//pega apenas uma questão pelo seu código 
app.get("/tbquestoes/:cod_disciplina/:cod_assunto/:cod_questoes", (req, res) => {
  const questoes = req.params.cod_questoes;  
  con.query(`SELECT * FROM tbquestoes WHERE cod_questoes = ${questoes}`, function (err, result) { 

      if (err) { 
  
           res.send(err); 
  
      } 
  
      res.send(result); 
  
  });
});


//CASO DÊ ALGO RUIM, TENTE COLOCAR UMA VARIAVEL EM CADA CODIGO var asunto = req.body

// pegar pelas disciplinas
app.get("/tbquestoes/:cod_disciplina", (req, res) => {
  const questoes = req.params.cod_disciplina;  
  con.query(`SELECT * FROM tbquestoes WHERE cod_disciplina = ${questoes}`, function (err, result) { 

      if (err) { 
  
           res.send(err); 
  
      } 
  
      res.send(result); 
  
  });
});



  

  //_______tbASSUNTO_________

app.get("/tbassunto", (req, res) => {
  con.query("SELECT * FROM tbassunto", function (err, result) { 

      if (err) { 
      
          res.send(err); 
      
  } 
      
      res.send(result); 
      
  });
});
  // selecionar tudo



  

app.get("/tbassunto/:nomeassunto", (req, res) => {
  con.query(`SELECT nome_assunto FROM tbassunto `, function (err, result) { 

      if (err) { 
      
          res.send(err); 
      
  } 
      
      res.send(result); 
      
  });
});

// selecionar determinado assunto

/*app.get("/tbassunto/:cod_disciplina/:nome_assunto", (req, res) => {
  const assunto = req.params.cod_disciplina
  con.query(`SELECT nome_assunto FROM tbassunto WHERE cod_disciplina = ${assunto}`, function (err, result) { 

      if (err) { 
      
          res.send(err); 
      
  } 
      
  res.send(result); 
      
  });
});
*/
//selecionar os assuntos de determinada disciplina 


app.get("/tbquestoes/:cod_disc/:cod_assunto", (req, res) => {
  const disc = req.params.cod_disciplina;
  const assunto = req.params.cod_assunto;  
  con.query(`SELECT * FROM tbquestoes AS q WHERE q.cod_assunto = ${assunto} AND q.cod_disciplina = ${disc}`, function (err, result) { 
      if (err) { 
          res.send(err); 
      } 
  
      res.send(result); 
  });
});


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
