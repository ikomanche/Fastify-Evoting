module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define(
      'admin',
      {
        adminid: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          field: 'adminid'
        },
        adminPW: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'adminPW'
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'name'
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'surname'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        }  
      },
      {
        timestamps: false
      }
    )
    return admin
  }
  