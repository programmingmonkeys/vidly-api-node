const winston = require('winston')
const mongoose = require('mongoose')
const config = require('config')

module.exports = () => {
  const db = config.get('db')
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => winston.info(`Connected to ${db}...`))
}
