module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define(
      'student',
      {
        studentid: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          field: 'studentid'
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
        departmant: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'departmant'
        },
        hasVoted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            field: 'hasVoted',
            default: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },        
        studentPW: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'studentPW'
        },
        generatedPW: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'generatedPW',
            default: ''
        },
        totalVote: {
          type: DataTypes.INTEGER,
          allowNull: true,
          field: 'totalVote',
          default: 0
        },
        isCandidate: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          field: 'isCandidate',
          default: false
        }
      },
      {
        timestamps: false
      }
    )

    return student
  }
  