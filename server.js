const http = require('http')

const PORT = 3333
const HOST = 'localhost'

const server = http.createServer((req,res)=>{
    res.end("foi?asdfasd")
    
})

server.listen(PORT,HOST,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});