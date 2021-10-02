const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;
const path = require("path");

let lista = [];
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

let aviso = "";

app.get("/", (req, res) => {

    res.render("index", {
        aviso,
        lista,
    });

});

app.post("/", function (req, res) {

})



app.get("/detalhes", function (req, res) {
    
    res.render("detalhes", { det: "CONHEÇA ALGUNS POKEMONS" });
});

app.get("/cadastro", function (req, res) {
    res.render("cadastro", { det: "CADASTRAR POKEMONS" });
});

app.post("/cadastro" , function (req, res) {
    const { imagem, numero, nome, tipo, altura, peso, genero, categoria, habilidades, modelo, fraquezas } = req.body;
    const site = { imagem:imagem, numero:numero, nome: nome, tipo: tipo, altura: altura, peso: peso, genero: genero, categoria: categoria, habilidades: habilidades,  modelo: modelo, fraquezas: fraquezas };
    res.render("resultado", site);
})

app.get("/recebPokemon" , function (req, res) {
    const {nome, tipo} = req.query;
    res.send({nome: nome, tipo: tipo});
})

app.post("/recebPokemon" , function (req, res) {
    const { imagem, numero, nome, tipo, altura, peso, genero, categoria, habilidades, modelo, fraquezas } = req.body;
    
    let pokemon = { imagem: imagem,
        numero: numero, 
        nome: nome, 
        tipo: tipo, 
        altura: altura, 
        peso: peso, 
        genero: genero, 
        categoria: categoria, 
        habilidades: habilidades, 
        modelo: modelo, 
        fraquezas: fraquezas
    }

    lista.push(pokemon)

    

    aviso = `Pokemon cadastrado com sucesso.`;

    

    setTimeout(() => {
        aviso = ""
    }, 5000);

    res.redirect("/");
})

app.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`));
