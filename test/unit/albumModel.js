// 'use strict';
//
// var expect = require('chai').expect;
//
// const mongoose = require('mongoose');
// var Image = require('../../models/image');
// var Album = require('../../models/album');
//
// const dbUrl = 'mongodb://localhost/album-app-test';
// let imageId, albumId;
//
// // add data to testDB first to test the relationship funtion
// before(function(cb) {
//     mongoose.connect(function() {
//         mongoose.connect(dbUrl, cb);
//
//         Image.collection.drop();
//         var album = new Album({
//             name: 'albumName'
//         });
//         album.save((err) => {
//             if (err) return cb(err);
//             else cb();
//         });
//     });
// });
// describe('Image', function() {
//   describe('.create()', function() {
//
//     it('should create a new image in the db.', function(cb) {
//       var imageObj = {
//         url: 'whatever',
//         description: 'anydesc'
//       };
//
//       Image.create(imageObj, function(err, image) {
//         expect(err).to.not.exist;
//         expect(image).to.exist;
//         expect(image.desc).to.equal(imageObj.desc);
//         cb();
//       });
//     });
//
//     it('should NOT create a new image - Missing field', function(cb) {
//       var imageObj = { };
//
//       Image.create(imageObj, function(err, image) {
//         expect(err).to.exist;
//         expect(image).to.not.exist;
//         cb();
//       });
//     });
//   });
// });
