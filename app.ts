import express from 'express'
const app = express()
const port = 3000


app.get('/', (req, res) => { 
    res.json('Hello World!')
  })


app.use(express.static('public'))


app.get('/about', (req, res) => {
    res.json('Это простое приложение на Express.js')
})

app.use((req, res) => {
    res.status(404).send( "Страница не найдена")
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })