const candidateListController = require('../controllers/candidateList')

module.exports = async function (fastify) {
  fastify.get('/candidateAppliers', candidateListController.getCandidateApplications)
  fastify.get('/candidateApplier/:id', candidateListController.getCandidateApplication)
  //fastify.post('/categories', studentController.addCategory)
  //fastify.delete('/admin/:id', adminController.deleteAdmin)
  //fastify.put('/categories/:id', studentController.updateCategory)
  fastify.put('/confirmApplication',candidateListController.ConfirmApplication)
}