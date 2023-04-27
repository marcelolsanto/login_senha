const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index', { title: 'Express' })
});
app.post('/', (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;
    res.send(`Dados fornecidos: email: ${email} e senha: ${senha}`)
});
app.listen(3000, () => {
    console.log('Serviço iniciado em http://127.0.0.1:3000')
})