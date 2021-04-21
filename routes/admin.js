const adminController = require('../controllers/admin')

module.exports = async function (fastify) {
  fastify.get('/admins', adminController.getAdmins)
  fastify.get('/admin/:id', adminController.getAdmin)
  //fastify.post('/categories', studentController.addCategory)
  fastify.delete('/admin/:id', adminController.deleteAdmin)
  //fastify.put('/categories/:id', studentController.updateCategory)
}