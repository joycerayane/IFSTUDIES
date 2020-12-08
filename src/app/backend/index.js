const express = require("express");
const bp = require("body-parser");
var cors = require("cors"); //npm i cors
const app = express();
const port = 3000;
app.use(bp.json());
app.use(cors());

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123@senha",
  database: "ifstudies",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/tbestudante", (req, res) => {
  con.query("SELECT * FROM tbestudante", function (err, result) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//--------------QUESTOES-----------
app.get("/tbquestoes", (req, res) => {
  con.query("SELECT * FROM tbquestoes", function (err, result) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//Tudo da Tabela Questões
/** O nome da tabela 'tbquestoes' estava errado no select. Ou você pega a informação
 * pela URL com request.params ou pelo body. Normalmente ou uma forma ou outra.
 *
 */
app.get("/tbquestoes/:cod_assunto", (req, res) => {
  const cod = req.params.cod_assunto; //aqui pega o parâmetro pelo request
  con.query(`SELECT * FROM tbquestoes WHERE cod_assunto = ${cod}`, function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});
// Selecionar as questões por assunto
//CASO DÊ ALGO RUIM, TENTE COLOCAR UMA VARIAVEL EM CADA CODIGO var asunto = req.body

app.get("/tbquestoes/:cod_questoes/:alternativa_correta", (req, res) => {
  con.query(
    `SELECT cod_questoes, alternativa_correta FROM TbQuestoes WHERE cod_assunto = ${questoes.cod_assunto}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }

      res.send(result);
    }
  );
});
//codigo da questao e alternativa correta (GABARITO)

app.get("/tbquestoes/:alternativas", (req, res) => {
  con.query(
    `SELECT cod_questoes, alternativa_a, alternativa_b, alternativa_c, aletrnativa_d, alternativa_e FROM TbQuestoes WHERE cod_questoes = ${questoes.cod_questoes}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }

      res.send(result);
    }
  );
});

//APENAS AS ALTERNATIVAS

//_________ tB ESTUDANTE _________

app.get("/tbestudante/:nome_estudante", (req, res) => {
  const estudante = req.body;
  con.query(
    `SELECT * FROM Tbestudante WHERE cod_estudante = ${estudante.cod_estudante}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }

      res.send(result);
    }
  );
});

//selecionar tudo de apenas um estudante

app.get("/tbestudante/:nome_estudante/:cod_estudante", (req, res) => {
  con.query("SELECT nome_estudante , cod_estudante FROM TbEstudante", function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

// nome e código de todos os estudantes

app.get("/tbestudante", (req, res) => {
  con.query("SELECT * FROM TbEstudante", function (err, result) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});
//tudo

app.get("/tbestudante/:nome_estudante", (req, res) => {
  con.query("SELECT * FROM TbEstudante ORDER BY nome_estudante", function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});
//ordem alfabetica

app.get("/tbestudante/:cod_estudante", (req, res) => {
  con.query("SELECT * FROM TbEstudante ORDER BY cod_estudante DESC", function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//ordem de codigo dos mais recentes para os mais antigos no site,
//se quiser crescente tira o desc

//_______tbASSUNTO_________

app.get("/tbassunto", (req, res) => {
  con.query("SELECT * FROM TbAssunto", function (err, result) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});
// selecionar tudo

app.get("/tbassunto/:nomeassunto", (req, res) => {
  con.query("SELECT nome_assunto FROM TbAssunto", function (err, result) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

// selecionar todos os assuntos

app.get("/tbassunto/:cod_disciplina/:nome_assunto", (req, res) => {
  const assunto = req.body;
  con.query(
    `SELECT cod_assunto, nome_assunto FROM TbAssunto WHERE cod_disciplina = ${assunto.cod_disciplina}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }

      res.send(result);
    }
  );
});
//selecionar os assuntos de determinada disciplina

app.get("/tbassunto/:cod_assunto", (req, res) => {
  con.query("SELECT * FROM TbAssunto ORDER BY cod_assunto", function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});
// selecionar o cod_assunto em ordem crescente

//                    DELETE

//DELETAR UM ASSUNTO
app.delete("/deletar/:assunto", (req, res) => {
  con.query(
    `DELETE FROM tbassunto WHERE cod_assunto = ${assunto.cod_assunto}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

//DELETAR UM ESTUDANTE
app.delete("/deletar/:estudante", (req, res) => {
  con.query(
    `DELETE FROM tbestudante WHERE cod_estudante = ${estudante.cod_estudante}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

//DELETAR UMA QUESTÃO
app.delete("/deletar/:estudante", (req, res) => {
  con.query(
    `DELETE FROM tbquestoes WHERE cod_questoes = ${questoes.cod_questoes}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

//                    UPDATE

// ATUALIZAR ESTUDANTE
/*cod_estudante, nome_estudante, senha, email */
app.patch("/atualizarestudante", (req, res) => {
  con.query(
    `UPDATE tbestudante SET nome_estudante = ${estudante.nome_estudante},
  senha = ${estudante.senha}, email = ${estudante.email}  WHERE cod_estudante = ${estudante.cod_estudante}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

//ATUALIZAR QUESTÃO
/*cod_questoes, texto, alternativa_a ..._e, alternativa_correta, cod_assunto */
app.patch("/atualizarquestoes", (req, res) => {
  con.query(
    `UPDATE tbquestoes SET texto = ${questoes.texto}, alternativa_a = ${questoes.alternativa_a}, 
  alternativa_b = ${questoes.alternativa_b},alternativa_c = ${questoes.alternativa_c},alternativa_d = ${questoes.alternativa_d},
  alternativa_e = ${questoes.alternativa_e},alternativa_correta = ${questoes.alternativa_correta},cod_assunto = ${questoes.cod_assunto}
  WHERE cod_questoes = ${questoes.cod_questoes}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

//ATUALIZAR ASSUNTO
/*cod_assunto, nome_assunto, cod_disciplina */
app.patch("/atualizarassunto", (req, res) => {
  con.query(
    `UPDATE tbassunto SET nome_assunto = ${assunto.nome_assunto},
cod_disciplina = ${assunto.cod_disciplina} WHERE cod_assunto = ${assunto.cod_assunto}`,
    function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
