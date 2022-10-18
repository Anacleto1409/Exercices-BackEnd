const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

function toCamelCase(arr) {
    let ans = ""
    for (let i = 0; i < arr.length; i++) {
        ans += (arr[i][0]).toUpperCase();
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] == '') {
                ans += ' ';
                ans += (arr[i][j + 1]).toUpperCase();
                j++;
            }
            else {
                ans += (arr[i][j]).toLowerCase();
            }
        }
    }
    return ans
}

app.patch('/api/strings', (req, res) => {
    const { strings } = req.body

    if (toCamelCase(strings).length == 0) {
        res.sendStatus(404)
        return
    } else {
        res.status(200)
            .json({
                CamelCase: toCamelCase(strings)
            })
    }
})



app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})