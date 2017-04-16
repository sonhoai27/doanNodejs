let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('album/album_all')
})
router.get('/:id', (req, res) => {
    res.render('album/item_album')
})

module.exports = router
