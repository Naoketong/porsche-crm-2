var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');//第五步
var authController = require('./../controllers/auth.js');//第六步
var clueController = require('./../controllers/clue');//第七步




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//第五步
router.post('/user' , userController.insert);
router.put('/user/:id' , userController.update);
//第六步
router.post('/login' , authController.login);
//第七步
router.post('/clue' , clueController.insert);
//第八步
router.put('/clue/:id' , clueController.update);
router.post('/clue/:id/log', clueController.addLog);

module.exports = router;



// var express = require('express');
// var router = express.Router();
// var userController = require('./../controllers/user.js');//第五步引入
// var authController = require('./../controllers/auth.js');//第六步引入
// var clueController = require('./../controllers/clue');//第七步引入
//  GET users listing. 

// //第五步引入
// router.post('/user' , userController.insert);
// router.put('/user/:id' , userController.update);
// //第六步引入
// router.post('/login' , authController.login);
// router.post('/clue' , clueController.insert);//第七步引入
// //第八步引入



// module.exports = router;

