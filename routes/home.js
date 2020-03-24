const {Router} = require('express')
const router = Router()
const ToolsController = require('../controllers/toolsController')


router.get('/', ToolsController.calculateDueDate)

router.post('/', ToolsController.calculateDueDate)

module.exports = router
