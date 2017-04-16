let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello Album')
})
router.get('/:id', (req, res) => {
    res.render('album/album_all')
})

module.exports = router