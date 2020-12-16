const router = require("express").Router();
let Message = require("../models/message")

router.route('/').get((req, res) => {
    Message.find()
       .then(message => res.json(message))
       .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/').post((req, res) => {
   const username = req.body.username;
   const content = req.body.content;

   const newMessage = new Message({
       username,
       content
    })

    newMessage.save()
       .then(() => res.json('Message added!'))
       .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/:id').get((req,res) => {
    Message.findById(req.params.id)
      .then(message => res.json(message))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  
  

module.exports = router;
















