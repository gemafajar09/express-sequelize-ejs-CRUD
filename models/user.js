module.exports = (sequelize, DataTypes) => {
var user = sequelize.define('user',{
  nama: {
    type: DataTypes.STRING
  },
  username:{
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
});

  return user;
}