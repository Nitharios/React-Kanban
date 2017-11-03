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

  User.associate = function(models) {
    User.hasMany(models.card, {
      foreignKey : 'creator_id', as : 'cards'
    });

    User.hasMany(models.card, {
      foreignKey : 'assigned_to_id', as : 'tasks'
    });
  }

  return User;
};

