module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name : { 
      type :  DataTypes.STRING, 
      allowNull : false,
      unique : true 
    }
  },  
  {
    tableName : 'users'
  },
  {
    indexes : [
      {
        name : 'users_pkey',
        unique : true,
        fields : ['id']
      }
    ]
  });

  return User;
};

