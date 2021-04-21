const db = require('../models/index')

exports.getStudents = async (req, res) => {
  const students = await db.student.findAll()
  return students
}

exports.getStudent = async (req, res) => {
  const student = await db.student.findOne({
    where: {
      studentid: parseInt(req.params.id)
    }
  })
  return student
}

// exports.addCategory = async (req, res) => {
//   const category = await db.category.create({
//     name: req.body.name
//   })
//   res.status(201).send(category)
// }

exports.CandidateApplication = async (req, res) => {
  const candidateApplier = await db.candidateList.create({
    studentID: parseInt(req.params.id),
    description: req.body.description
  })  
  res.status(201).send(candidateApplier)
}

exports.deleteStudent = async (req, res) => {
  const student = await db.student.findOne({
    where: {
      studentid: parseInt(req.params.id)
    }
  })
  student.destroy()
  res.status(204).send()
}

exports.getVotedStudents = async (req,res) => {
  const student = await db.student.findAll({
    where: {
      hasVoted: true
    }
  })
  return student
}

exports.getCSEStudents = async (req,res) => {
  const student = await db.student.findAll({
    where: {
      departmant:'CSE'
    }
  })
  return student
}

// exports.updateCategory = async (req, res) => {
//   const category = await db.category.findOne({
//     where: {
//       id: parseInt(req.params.id)
//     }
//   })
//   category.update({ name: req.body.name || category.name })
//   res.status(200).send(category)
// }


