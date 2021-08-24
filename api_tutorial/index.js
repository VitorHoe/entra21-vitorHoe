const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

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
//Banco de dados
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
    ];

// Rotas de usuário "/users"
app.get("/users", (request, response) => {
    response.json(users);
});

app.get("/users/:id", (request, response) => {
    const userId = request.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        response.status(404).json({ message:"User not found!" })
    }

    response.json(user);
});

app.get("/users", (request, response) => {

});

app.get("/users", (request, response) => {

});

app.get("/users", (request, response) => {

});

app.listen(PORT, () => console.log("O servidor está rodando..."));