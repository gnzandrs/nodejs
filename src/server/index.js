import express from 'express'
const app = express()

import api from 'src/server/api'

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/tvify')

app.use(express.static('public'))

app.use('/api/votes', (req, res, next) => {
	console.log('Middleware 1')
	next()
})

app.use('/api/votes', (req, res, next) => {
	console.log('Middleware 2')
	next()
})

app.use('/api', api)

app.listen(3000, () => console.log('Servidor iniciado con Express escuchando en el puerto 3000') )