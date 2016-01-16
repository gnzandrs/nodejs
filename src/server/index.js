import express from 'express'
const app = express()

app.use(express.static('public'))

// GET /votes
app.get('/votes', (req, res) => {
  res.json([])
})

// POST /vote/<id>
app.post('/post/:id', (req, res) => {

})

app.listen(3000, () => console.log('Servidor iniciado con Express escuchando en el puerto 3000') )