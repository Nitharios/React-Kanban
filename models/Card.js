module.exports = function(sequelize, DataTypes) {
  const Card = sequelize.define('card', {
    title : { 
      type :  DataTypes.STRING, 
      allowNull : false,
      unique : true 
    }
  },  
  {
    tableName : 'cards'
  },
  {
    indexes : [
      {
        name : 'cards_pkey',
        unique : true,
        fields : ['id']
      }
    ]
  });

  Card.associate = function(models) {
    Card.belongsTo(models.priority, {
      foreignKey :  "priority_id",
      allowNull : false
    });

    Card.belongsTo(models.user, {
      foreignKey : "creator_id",
      as : "creator",
      allowNull : false
    });

    Card.belongsTo(models.user, {
      foreignKey : "assigned_to_id",
      as : "dev"
    });

    Card.belongsTo(models.status, {
      foreignKey :  "status_id",
      allowNull : false,
      defaultValue : 1 
    });
  };

  return Card;
};

