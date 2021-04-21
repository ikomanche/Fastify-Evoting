const db = require('../models/index')
const student = require('../models/student')

exports.getCandidateApplications = async (req, res) => {
  const candidateAppliers = await db.candidateList.findAll()
  return candidateAppliers
}

exports.getCandidateApplication = async (req, res) => {
  const candidateApplier = await db.candidateList.findOne({
    where: {
        candidateListID: parseInt(req.params.id)
    }
  })
  return candidateApplier
}

// exports.addCategory = async (req, res) => {
//   const category = await db.category.create({
//     name: req.body.name
//   })
//   res.status(201).send(category)
// }

exports.ConfirmApplication = async (req,res) => {
    const candidateApplier = await db.student.findOne({
        where:{
            studentid: req.body.studentID
        }                                                    
    })
    candidateApplier.update({isCandidate : true})
    res.status(200).send(candidateApplier)
}

exports.deleteCandidateApplier = async (req, res) => {
  const candidateApplier = await db.candidateList.findOne({
    where: {
      candidateListID: parseInt(req.params.id)
    }
  })
  candidateApplier.destroy()
  res.status(204).send()
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
