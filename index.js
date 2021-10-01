const express = require("express");
const app = express();
const path = require("path"); 
const port = 3000; 

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    const pokemon = [];
    res.render("index.ejs", { pokemon: pokemon });
});

app.get("/cadastro", function (req, res) {
    res.render("../views/cadastro.ejs");
});
app.get("/hoje", function (req, res) {
    res.render("../views/hoje.ejs");
});
app.get("/detalhes", function (req, res) {
    const details = ['Imagem', 'Descrição', 'Altura', 'Peso', 'Categoria', 'Habilidade'];
    res.render("../views/detalhes.ejs", { details: details });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));