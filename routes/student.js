const studentController = require('../controllers/student')

module.exports = async function (fastify) {
  fastify.get('/students', studentController.getStudents)
  fastify.get('/student/:id', studentController.getStudent)
  //fastify.post('/categories', studentController.addCategory)
  fastify.delete('/student/:id', studentController.deleteStudent)
  //fastify.put('/categories/:id', studentController.updateCategory)
  fastify.get('/students/votedstudents',studentController.getVotedStudents)
  fastify.get('/csestudents',studentController.getCSEStudents)
}