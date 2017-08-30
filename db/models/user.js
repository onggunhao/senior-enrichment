'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const User = module.exports = db.define('user', {
  name: Sequelize.STRING,
})
