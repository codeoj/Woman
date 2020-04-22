//Importa as funcionalidades do express (npm install express) 
//Importa o modulo express pra dentro da variavel const express
const express = require('express');

const app = express();

const port = 3333;

//Cria a rota. ('/rota') => É o endereço da rota. ('/') => Rota raiz.
app.get('/', (req, res) => res.send('Hello World')); //A resposta pode ser: response.json({}) obejeto chave valor

//Ao executar fica ouvindo as requisições no navegador (localhost:port)
app.listen(port, () => console.log(`Servidor iniciado em http://localhost:${port}`));