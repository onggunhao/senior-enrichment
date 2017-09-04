const router = require('express').Router();
const { Campus } = require('../../db/models')

module.exports = router

// GET api/campuses
router.get('/', (req, res, next) => {
  Campus.findAll({
    include: [{all:true}]
  })
    .then(campuses => res.json(campuses))
    .catch(next);
})

// GET api/campuses/:campusId
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId, {
    include: [{all:true}]
  })
    .then(campus => res.json(campus))
    .catch(next)
})

// POST api/campuses
router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

// PUT api/campuses/:campusId
router.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body))
    .then(updated => res.json(updated))
    .catch(next)
})

// DELETE api/campuses/:campusId
router.delete('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.destroy())
    .then(destroyed => res.json(destroyed))
    .catch(next)
})