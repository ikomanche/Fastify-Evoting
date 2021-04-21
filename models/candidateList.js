module.exports = (sequelize, DataTypes) => {
    const candidateList = sequelize.define(
      'candidateList',
      {
        candidateListID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          field: 'candidateListID'
        },
        studentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'studentID'
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'description'
        }
      },
      {
        timestamps: false
      }
    )
    return candidateList
  }
  