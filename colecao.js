const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())

const ids = []
app.get('/api/colecao/:id', (req, res) => {
    const { id } = req.params

    if (ids.some(ele => id == ele.id)) {
        res.status(200)
            .json(ids.find(ele => id == ele.id))
    } else {
        res.sendStatus(404)
        return
    }
})

app.patch('/api/colecao/:id', (req, res) => {
    const { id } = req.params

    if (ids.some(ele => id == ele.id)) {
        const index = ids.findIndex(ele => id == ele.id)
        ids[index] = { ...req.body }
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
        return
    }
})

app.post('/api/colecao', (req, res) => {

    if (ids.some(ele => req.body.id == ele.id)) {
        res.sendStatus(409)
        return
    } else {
        ids.push(req.body)
        res.sendStatus(200)
    }

})



app.listen(
    port,
    () => console.log(`A escuta em http://localhost:${port}`)
)