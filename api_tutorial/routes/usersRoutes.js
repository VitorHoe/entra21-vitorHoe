const express = require("express");
const router = express.Router();

//Importando o controller
const usersControllers = require("../controllers/usersControllers");

//Banco de dados
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

// Obter todos os usuários
router.get("/", usersControllers.getAllUsers)

// Obter um usuário
router.get("/:id", (request, response) => {
    const userId = request.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        response.status(404).json({ message:"User not found!" })
    }

    response.json(user);
});

// Criar um usuário
router.post("/", (request, response) => {
    const { id, name, email } = request.body;
 
    //Verificando se o e-mail já está cadastrado
    const userAlreadyExists = users.find(user => user.email === email);
 
    if (userAlreadyExists) {
       return response.status(409).json({ message: "User already exists" });
    }
    
    const user = { id, name, email }
    // Inserindo o usuário
     users.push(user);
 
     response.status(201).json(user);
 });

 // Atualizar as informações de um usuário
router.put("/:id", (request, response) => {
    const { name } = request.body;
    const userId = request.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        return response.status(404).json({ message: "User not found"});
    }

    user.name = name;

    response.json(user);
});

// Remover um usuário
router.delete("/:id", (req, res) => {
    // Obter o id dos parametros
    const userId = req.params.id;
    // Verificar se o usuario com aquele id existe
    const userIdInDB = users.findIndex(user => user.id == userId);
    
     if (userIdInDB < 0) {
    return res.status(404).json({ message: "User not found" });
    }
    
     // Remover o usuario do bd ()
    users.splice(userIdInDB, 1);
    
     res.status(204).end();
    });

module.exports = router;