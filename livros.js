const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())


const livros = [
    {
        "id": "lusiadas",
        "nome": "Os Lusiadas",
        "ano": 1572,
        "author": "Luis Vaz de Camões"
    },
    {
        "id": "maias",
        "nome": "Os Maias",
        "ano": 1888,
        "author": "Eça de Queiroz"
    },
    {
        "id": "desassossego",
        "nome": "O Livro do Desassossego",
        "ano": 1982,
        "author": "Bernardo Soares (Fernando Pessoa)"
    },
    {
        "id": "mensagem",
        "nome": "Mensagem",
        "ano": 1934,
        "author": "Fernando Pessoa"
    }
]



app.get('/api/livros/:id', (req, res) => {

    if (livros.some(ele => req.params.id == ele.id)) {
        res.status(200)
            .json({
                livro: livros.find(ele => req.params.id == ele.id)
            })
    } else {
        res.sendStatus(404)
        return
    }
})


app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})