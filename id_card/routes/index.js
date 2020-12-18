const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

// POST method
router.post('/completedId', function (req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let userFN = firstName + " " + lastName;
  let email = req.body.email;
  let age = Number(req.body.age);
  let address = req.body.address;

  res.render('completedId', {
    userFN,
    email,
    age,
    address
  })
})


module.exports = router;
