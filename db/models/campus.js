'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING  // In case of large iamges
  }
})