// 'use strict';
//
// var expect = require('chai').expect;
//
// const mongoose = require('mongoose');
// var Image = require('../../models/image');
//
// const dbUrl = 'mongodb://localhost/photo-album-test';
//
// // add data to testDB first to test the relationship funtion
// beforeEach(function(cb) {
//     mongoose.connect(dbUrl, function() {
//         // mongoose.connect(dbUrl, cb);
//
//         Image.collection.drop();
//         var image = new Image({
//             url: 'url',
//             description: 'descriptionwill go here'
//         });
//         image.save((err) => {
//             if (err) return cb(err);
//             else cb();
//         });
//     });
// });
// describe('Image', function() {
//   describe('.create()', function() {
//     it('should create a new image in the db.', function(cb) {
//       var imageObj = {
//         url: 'whatever',
//         description: 'anydesc'
//       };
//
//       Image.create(imageObj, function(err, image) {
//         expect(err).to.not.exist;
//         expect(image).to.exist;
//         expect(image.description).to.equal(imageObj.description);
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
//   mongoose.connection.close();
//
// });
