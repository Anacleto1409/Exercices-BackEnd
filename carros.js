const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.get("/api/carros/:marca", (request, response) => {
    debugger;
    if (request.params.marca == "audi" || request.params.marca == "mercedes") {
        response.status(200)
        response.json({ existe: true })
    } else {
        response.status(404)
        response.json({ existe: false })
    }

})

app.listen(
    PORT,
    () => console.log(`A escuta em http://localhost:${PORT}`)
)