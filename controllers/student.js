const db = require('../models/index')
const fastify = require('fastify')
const nodemailer = require("nodemailer");

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

exports.getStudentMail = async (req, res) => {
  const student = await db.student.findOne({
    where: {
      studentid: parseInt(req.params.id)
    }
  })
  return student.email
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

exports.getEEStudents = async (req,res) => {
  const student = await db.student.findAll({
    where: {
      departmant:'EE'
    }
  })
  return student
}

exports.getIEStudents = async (req,res) => {
  const student = await db.student.findAll({
    where: {
      departmant:'IE'
    }
  })
  return student
}

exports.sendMail = async (req,res) => {
  const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service : "Gmail",
    auth: {
      user: "iku.evotingsystem@gmail.com",//--testAccount.user, // generated ethereal user
      pass: "IlkerBerkayBugra"//--testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"IKU E-Voting Sytem" <iku.evotingsystem@gmail.com>', // sender address
    to: req.params.email, // list of receivers
    subject: "Account Verification", // Subject line
    text: "Hello world?", // plain text body
    html: "Click the link below to set your password", // html body
  });

  res.status(201).send(info);
}

exports.setPassword = async (req,res) => {
  const student = await db.student.findOne({
      where:{
          studentid: parseInt(req.params.id)
      }                                                    
  })
  student.update({studentPW : req.params.pw})
  res.status(200).send(student)
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


