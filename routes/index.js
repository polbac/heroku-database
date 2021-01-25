var express = require('express');
var router = express.Router();

const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('freedbtech_polbac_test', 'freedbtech_polbac_test', 'polbac_test', {
  host: 'freedb.tech',
  dialect: 'mysql',
})
const User = sequelize.define("test", {
  id: {type: Sequelize.SMALLINT, primaryKey: true},
  name: DataTypes.STRING
}, {
  tableName: 'test'
});



/* GET home page. */
router.get('/', async function(req, res, next) {
  User.findAll()
  .then(data => {
    res.render('index', { title: 'Express', users: data });
  })
  .catch(err => console.log(err))
  
});

module.exports = router;
