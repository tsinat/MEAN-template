'use strict';

var mongoose = require('mongoose');

var auctionSchema = new mongoose.Schema({
    description: {type: String, required: true},
    image: {type: String, required: true, required:true},
    startTime:{type: Date, default: Date.now},
    endTime: {type: Date, required: true},
    category: {type: String, required: true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    initialBid: {type: Number, required: true},
    highestBid: [{
        value: {type: Number},
        bider: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }]
});

auctionSchema.statics.getOne = (id, cb) => {
    Auction.findById(id, (err, auction) => {
        if(err) return cb(err);
        cb(null, auction);
    });
};

auctionSchema.statics.create = (auctionObj, cb) => {
    console.log('auction create:', auctionObj);
    var auction = new Auction({
        description: auctionObj.description,
        image: auctionObj.image,
        endTime: auctionObj.endTime,
        category: auctionObj.category,
        owner: auctionObj.owner,
        initialBid: auctionObj.initialBid,
    });
    auction.save((err, savedAuction) => {
        if(err) return cb(err);

        else cb(null, savedAuction);
    });
};

auctionSchema.statics.update = (id, currentAuction, cb) => {
    var obj = currentAuction;
    Auction.findByIdAndUpdate(id, { $set: obj}, (err, updatedAuction) => {
        if(err) cb(err);

        updatedAuction.save((err, savedAuction) => {
            if(err) cb(err);

            cb(null, savedAuction);
        });
    });
};

auctionSchema.statics.deleteAuction = (id, cb) => {
    Auction.findByIdAndRemove(id, (err, deletedAuction) => {
        if(err){
            cb(err)
        }
        else {
            cb(deletedAuction);
        }
    });
};

auctionSchema.statics.highBid = (auctionId, userId, bid, cb) => {
    Auction.findById(auctionId, (err, auction) => {
        console.log("auction:", auction);
        if(err) cb(err);

        var obj = {
            value: Number(bid.value),
            bider: bid.bider
        };
        console.log('bid:', obj);
        console.log('hightestBid:', typeof auction.highestBid);

        auction.highestBid.push(obj);

        auction.save((err, savedBid) => {
            if(err) cb(err);

            cb(null , savedBid)
        })
    })
}

var Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
