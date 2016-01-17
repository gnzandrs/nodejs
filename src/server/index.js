import express from 'express'
const app = express()

const votes = {}

app.use(express.static('public'))

// GET /votes
app.get('/votes', (req, res) => {
  res.json(votes)
})

// POST /vote/<id>
app.post('/vote/:id', (req, res) => {
  let id = req.params.id
  if (votes[id] === undefined) {
    votes[id] = 1
  } else {  
    votes[id] = votes[id] + 1
  }

  res.json({ votes: votes[id] })
})

app.listen(3000, () => console.log('Servidor iniciado con Express escuchando en el puerto 3000') )