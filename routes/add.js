const {Router} = require('express')
const router = Router()

router.get('/add', (req, res) => {
  res.render('add_course', {
    title: 'Add Course',
    isAdd: true
  })
})

router.post('/add', () => function() {

})

module.exports = router
