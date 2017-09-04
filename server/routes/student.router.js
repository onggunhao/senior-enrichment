const router = require('express').Router();
const { Student } = require('../../db/models')

module.exports = router

// GET api/students
router.get('/', (req, res, next) => {
  Student.findAll({
    include: [{all:true}]
  })
    .then(students => res.json(students))
    .catch(next);
})

// GET api/students/:studentId
router.get('/:studentId', (req, res, next) => {
  Student.findById(parseInt(req.params.studentId), {
    include: [{all:true}]
  })
    .then(student => res.json(student))
    .catch(next)
})

// POST api/students
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

// PUT api/students/:studentId
router.put('/:studentId', (req, res, next) => {
  Student.findById(parseInt(req.params.studentId))
    .then(student => student.update(req.body))
    .then(updated => res.json(updated))
    .catch(next)
})

// DELETE api/student/:studentId
router.delete('/:studentId', (req, res, next) => {
  Student.findById(parseInt(req.params.studentId))
    .then(student => student.destroy())
    .then(destroyed => res.json(destroyed))
    .catch(next)
})