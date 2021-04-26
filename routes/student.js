const studentController = require('../controllers/student')

module.exports = async function (fastify) {
  fastify.get('/students', studentController.getStudents)
  fastify.get('/student/:id', studentController.getStudent)
  //fastify.post('/categories', studentController.addCategory)
  fastify.delete('/student/:id', studentController.deleteStudent)
  //fastify.put('/categories/:id', studentController.updateCategory)
  fastify.get('/students/votedstudents',studentController.getVotedStudents)
  fastify.get('/csestudents',studentController.getCSEStudents)
  fastify.get('/eestudents',studentController.getEEStudents)
  fastify.get('/iestudents',studentController.getIEStudents)
  fastify.post('/candidateApplication/:id',studentController.CandidateApplication)
  fastify.post('/sendMail/:email',studentController.sendMail)
  fastify.put('/setPassword/:id/:pw',studentController.setPassword)
}