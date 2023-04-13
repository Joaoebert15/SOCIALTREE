const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const server = http.createServer((req, res) => {
	// Renderiza a página EJS
	ejs.renderFile('./index.ejs', {pageTitle: 'Minha Página EJS', pageContent: 'Bem-vindo à minha página EJS!'}, (err, html) => {
		if (err) {
			console.log(err);
			res.writeHead(500);
			res.end('Erro ao renderizar a página EJS');
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);
		}
	});
});

server.listen(3000);
console.log('Servidor rodando na porta 3000');