'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const Student = module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
})