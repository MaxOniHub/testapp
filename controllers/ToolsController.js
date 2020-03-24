var DueDate = require('../models/DueDate')
const DueDateService = require('../services/DueDateService')

exports.calculateDueDate = function(req, res) {
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
};
