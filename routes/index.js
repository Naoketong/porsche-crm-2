var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.js');
//第六步
var authController = require('./../controllers/auth.js');
var authMiddleware = require('./../middlewares/auth.js');
//第七步
var clueController = require('./../controllers/clue.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/admin/login', function(req, res, next) {
  res.render('admin/login');
});
router.get('/admin/user', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.show);
router.get('/admin/user/create', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.renderUserCreate);
router.get('/admin/user/:id/edit', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.edit);



//第七步
router.get('/admin/clue', clueController.show);

router.get('/admin/clue/:id', clueController.log);





module.exports = router;




