const db = require('../models/index')

exports.getAdmins = async (req, res) => {
  const admins = await db.admin.findAll()
  return admins
}

exports.getAdmin = async (req, res) => {
  const admin = await db.admin.findOne({
    where: {
      adminid: parseInt(req.params.id)
    }
  })
  return admin
}

// exports.addCategory = async (req, res) => {
//   const category = await db.category.create({
//     name: req.body.name
//   })
//   res.status(201).send(category)
// }

exports.deleteAdmin = async (req, res) => {
  const admin = await db.admin.findOne({
    where: {
      adminid: parseInt(req.params.id)
    }
  })
  admin.destroy()
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
