const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

// Configurar o express para usar JSON
app.use(bodyParser.json());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    } else {
        console.log("Conectado ao banco de dados SQLite.");
    }
});

// Criação da tabela, se não existir
db.run(`
    CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL
    )
`);

// Endpoint para receber os dados do formulário
app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    const query = `INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)`;
    db.run(query, [name, email, message], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: "Erro ao salvar no banco de dados" });
        } else {
            res.status(200).json({ success: true, id: this.lastID });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get("/submissions", (req, res) => {
    const query = `SELECT * FROM submissions`;
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: "Erro ao buscar dados" });
        } else {
            res.status(200).json(rows);
        }
    });
});
