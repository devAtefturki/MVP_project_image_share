const router = require('express').Router();
let User = require('../model/users.js');

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update').put((req, res) => {
  const username = req.body.username;
  const password =req.body.password;
  const respectivePosts=req.body.respectivePosts

  const updatedUser = new User({username,password,respectivePosts});

  updatedUser.save()
    .then(() => res.json('User updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;