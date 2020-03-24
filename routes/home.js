const {Router} = require('express')
const router = Router()
const DueDateService = require('../services/DueDateService')
const DueDate = require('../models/DueDate')

router.get('/', function(req, res) {
  var result = '';

  if (req.body.date) {
    const dueDateModel = new DueDate(req.body.date, req.body.turnaroundTime)
    const dueDateService = new DueDateService
    result = dueDateService.calculateDueDate(dueDateModel)
}
  res.render('index', {
    title: "Home",
    isHome: true,
    result: result
  })
});

router.post('/', function(req, res) {
  var result = '';

  if (req.body.date) {
    const dueDateModel = new DueDate(req.body.date, req.body.turnaroundTime)
    const dueDateService = new DueDateService
    result = dueDateService.calculateDueDate(dueDateModel)
}
  res.render('index', {
    title: "Home",
    isHome: true,
    result: result
  })
});


module.exports = router
