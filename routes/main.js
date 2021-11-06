__path = process.cwd()

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/test', (req, res) => {
    res.sendFile(__path + '/views/test.html')
})

module.exports = router
