'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});

  User.associate = function (models) {
    User.belongsTo(models.Appointments, { foreignKey: 'userId' });
  };
  return User;
};