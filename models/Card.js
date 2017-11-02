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
      foreignKey : {
        name : "priority_id",
        allowNull : false
      }
    });

    Card.belongsTo(models.user, {
      foreignKey : {
        name : "creator_id",
        allowNull : false
      },
    });

    Card.belongsTo(models.user, {
      foreignKey : {
        name : "assigned_to_id"
      }
    });

    Card.belongsTo(models.status, {
      foreignKey : {
        name : "status_id",
        allowNull : false,
        defaultValue : 3
      }
    });
  };

  return Card;
};

