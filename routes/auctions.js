var express = require('express');
var router = express.Router();

var Auction = require('../models/auction');
var User = require('../models/user');


router.get('/', (req, res) => {
    Auction.find({}, (err, auctions) => {
        if (err) return res.status(400).send(err);

        else res.send(auctions);
    });
});

router.get('/:id', (req, res) => {
    Auction.getOne(req.params.id, (err, auction) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(auction);
        }
    });
});

router.post('/', User.isLoggedIn, (req, res) => {
    Auction.create(req.body, (err1, auction) => {
        if(err1) res.status(400).send(err1)
        else{
            User.addAuction(req.user, auction, (err2, addedAuction)=> {
                if(err2) res.status(400).send(err2);
            });
        };
        res.send(auction);
    });
});

router.put('/:id', User.isLoggedIn, (req, res) => {
    Auction.update(req.params.id, req.body, (err, updatedAuction) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(updatedAuction);
        }
    });
});

router.delete('/:id', User.isLoggedIn, (req, res) => {
    Auction.deleteAuction(req.params.id, (err, deletedAuction) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(deletedAuction);
        }
    });
});

router.put('/:auctionId/addBid/:userId', User.isLoggedIn, (req, res) => {
    Auction.highBid(req.params.auctionId, req.params.userId, req.body, (err, hightestBid)=> {
        if(err) res.status(400).send(err);

        res.send(hightestBid);
    });
});

module.exports = router;
