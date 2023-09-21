import http from 'http'

const PORT = 3333
const HOST = 'localhost'

const server = http.createServer((req,res)=>{
    console.log(req.method)

    
    if (req.method == 'GET'){
        if(req.url == '/usuarios'){
            console.log('Entrou no /usuarios')
            res.writeHead(200)
            res.end("Entrou")
        }else{
            res.end("Entrous")
        }
    }
})

server.listen(PORT,HOST,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});