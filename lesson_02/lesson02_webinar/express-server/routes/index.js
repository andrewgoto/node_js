const express = require('express')
const router = express.Router()
const { articles } = require('../data/data.json')
const fs = require('fs').promises
const path = require('path')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'My Site' })
})

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Conatct' })
})

router.post('/contact', async (req, res, next) => {
  await fs.writeFile(
    path.join(__dirname, '..', 'data', 'message.json'),
    JSON.stringify(req.body, null, 2),
  )
  res.redirect('/')
})

router.get('/blog', (req, res, next) => {
  res.render('blog', { title: 'My Blog', articles })
})

module.exports = router
