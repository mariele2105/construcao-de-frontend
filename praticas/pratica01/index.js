const http = require('http');

//Cria um servidor HTTP
const server = http.createServer((req, res) => {
    res.statusCode = 200;  // Define o status como 200 (ok)
    res.setHeader('Content-Type', 'text/plain');  // Define o tipo de conteudo como texto
    res.end('Hello World\n');  // Envia a resposta ao cliente
});

//Define a porta em que o servidor ira escutar
const PORT = 3000;
server.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}/')
})
