import express from 'express'
const router = express.Router()

import Vote from 'src/server/models'

// GET /api/votes
router.get('/votes', (req, res) => {
  console.log('Peticion GET /votes')
  Vote.find({}, (err, docs) => {
  	  if (err){
  	  	return res.sendStatus(500).json(err)
  	  }
  	  res.json(docs)
  })
})

// POST /api/vote/<id>
router.post('/vote/:id', (req, res) => {
  var onSave = function (vote) {
  	return err => {
	  		if (err) {
				return res.sendStatus(500).json(err)
			}
			res.json(vote)
	  	}
	}

  let id = req.params.id
  
  Vote.findOne({ showId: id }, (err, doc) => {
  	if (doc) {
  		// actualizo
  		doc.count = doc.count + 1
  		doc.save(onSave(doc))
  	}
  	else {		
  		// crear uno nuevo y le pongo 1
  		let vote = new Vote()
  		vote.showId = id
  		vote.count = 1
  		vote.save(onSave(vote))
  	}
  })
  
})

export default router