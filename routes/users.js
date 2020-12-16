const router = require("express").Router();
let Users = require("../models/user")

router.route('/').get((req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err)
})

router.route('/').post((req, res) => {
    const username = req.body.username;
    
    const newUser = new Users({username})
 
     newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
 });

 router.route('/:id').get((req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err)
})

router.route('/:id/:message').get((req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err)
})
 
 
 module.exports = router;