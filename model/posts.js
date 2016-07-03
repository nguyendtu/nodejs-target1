let Sequelize = require('sequelize')
let sequelize = new Sequelize('book', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

let post = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: Sequelize.STRING,
  categories: Sequelize.INTEGER,
  content: Sequelize.TEXT,
  created_at: Sequelize.DATE,
  created_by: Sequelize.STRING
})

sequelize.sync()
/* post.create({
  title: 'test',
  categories: 1,
  content: 'content',
  created_at: new Date()
}) */

module.exports = post
