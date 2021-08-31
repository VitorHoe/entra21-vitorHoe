const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 3001;

//Importando as rotas
const usersRouts = require("./routes/usersRoutes")

//Definindo os middlewares
app.use(express.json())

//Definindo as rotas
app.use("/users", usersRouts);

// Rotas raiz "/"
app.get("/", (request, response) => {
    response.send("What's up");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", (request, response) => {
    response.send("Método PUT");
});

app.delete("/", (request, response) => {
    response.send("Método DELETE");
});

app.listen(PORT, () => console.log("O servidor está rodando..."));