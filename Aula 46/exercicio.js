const fsp = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

//EXERCÍCIO 1:
/*(async () => {
    try {
        const data = await fsp.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        
        const nomes = data.toString("utf-8").split(EOL);

        console.log(nomes.filter(nome => nome[0].toUpperCase() === "A"));        
    } catch (err) {
        console.log(err.message);
    }
})(); */

//EXERCÍCIO 2:
async function getUserByName(name) {
    
    const data = (await fsp.readFile(path.resolve("users.json"))).toString("utf-8");
    
    const users = JSON.parse(data)

   const user = users.find(user => user.nome === name)
}

(async () => {
 const user = await getUserByName("João")

 if (user) {
    console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
} else {
    console.log("Usuário não encontrado");
 }
})();