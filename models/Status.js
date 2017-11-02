module.exports = function(sequelize, DataTypes) {
  const Status = sequelize.define('status', {
    name : {
      type : DataTypes.STRING,
      unique : true,
      allowNull : false
    }
  },
  {
    indexes : [
      {
        name : 'status_pkey',
        unique : true,
        fields : ['id']
      }
    ]
  });

  return Status;
};