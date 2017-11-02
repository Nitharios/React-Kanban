module.exports = function(sequelize, DataTypes) {
  const Priority = sequelize.define('priority', {
    name : {
      type : DataTypes.STRING,
      unique : true,
      allowNull : false
    }
  },
  {
    tableName : 'priorities'
  },
  {
    indexes : [
      {
        name : 'priorities_pkey',
        unique : true,
        fields : ['id']
      }
    ]
  });

  return Priority;
};