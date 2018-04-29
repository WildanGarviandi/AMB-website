'use strict';
module.exports = function(sequelize, DataTypes) {
  var Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    assert: DataTypes.STRING,
    author: DataTypes.STRING,
    icon_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Articles;
};
