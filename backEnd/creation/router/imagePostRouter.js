const router = require('express').Router();
let image = require('../model/imagePost.js');

router.route('/:id').get((req, res) => {
  image.findById(req.params.id)
    .then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const img=req.body.img;
  

  const newImage = new image({title,img});

  newImage.save()
    .then(() => res.json('imagePost added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;