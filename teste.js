let fs = require("fs");

// fs.readFileSync('desafio_.js',(err,data)=>{
//     if (err) throw err;
//     console.log(`O conteúdo do arquivo é: ${data}`);
// })

const data = fs.readFileSync('desafio_.js').toString()
console.log(data)