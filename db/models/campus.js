'use strict';
var Sequelize = require('sequelize')
var db = require('../index')

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING  // In case of large iamges
  }
})