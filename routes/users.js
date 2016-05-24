'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');


router.post('/register', (req, res) => {
    console.log(req.body);
    User.register(req.body, (err, savedUser) => {
        res.status(err ? 400 : 200).send(err || savedUser);
    });
});

router.post('/authenticate', (req, res) => {
    User.authenticate(req.body, (err, token, dbUser) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.cookie('accessToken', token).send(dbUser);
        }
    });
});

router.put('/:id', User.isLoggedIn, (req, res) => {
    User.edit(req.params.id, req.body, (err, editedUser) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(editedUser);
        }
    });
});

router.post('/logout', (req, res) => {
    console.log('logout routing:');
    res.clearCookie('accessToken').send();
});

router.get('/', User.auth(), (req, res) => {
    User.find({}, (err, users) => {
        res.status(err ? 400 : 200).send(err || users);
    }).select('-password');
});

router.get('/:id', User.isLoggedIn, (req, res) => {
    User.find(req.params.id, (err, user) => {
        if (err) return res.status()

        res.send(user)
    }).select('-password');
});



module.exports = router;
