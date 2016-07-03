let express = require('express')
let Post = require('../model/posts')
let router = express.Router()

router.route('/')
  .all((req, res, next) => {
    let token = req.headers.token
    if (typeof token === 'undefined' || token === 'null') {
      return res.redirect('/404')
    }

    next()
  })
  .get((req, res) => {
    Post.findAll({
      attributes: ['id', 'title', 'categories'],
      limit: 40,
      order: 'created_at DESC'
    }).then((data) => {
      res.json(data)
    })
  })
  .post((req, res) => {
    let post = JSON.parse(req.body.post)
    Post.create({
      title: post.title,
      categories: post.categories,
      content: post.content,
      create_at: new Date()
    }).then((data) => {
      res.json(data)
    })
  })
router.route('/:id')
  .all((req, res, next) => {
    let token = req.headers.token
    if (typeof token === 'undefined' || token === 'null') {
      return res.redirect('/404')
    }

    next()
  })
  .get((req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json(data)
    })
  })
  .delete((req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json(data)
    })
  })

module.exports = router
