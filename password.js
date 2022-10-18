const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 3000

function checkPasswordStrength(password) {
    ;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}
app.patch('/api/auth/password', (req, res) => {
    const { password, confirmacaoPassword } = req.body
    let validade = false

    let forca = checkPasswordStrength(password) + 1
    if (password.length >= 8) forca++
    if (password !== confirmacaoPassword) {
        forca = 0
    }
    return res.status(200).json({
        forca: forca,
        valida: forca >= 4
    })
})


app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})