const router = require('express').Router();
var userController = require('../controller/userController');

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/user', userController.index);
router.get('/userinput', userController.add);
router.post('/useradd', userController.createUser);
router.get('/useredit/:id', userController.edit);
router.post('/userupdate', userController.updateUser);
router.get('/userdelete/:id', userController.deleteUser);

module.exports = router;
