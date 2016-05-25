// 'use strict';
//
// const supertest = require('supertest');
// const expect = require('chai').expect;
//
// let app = require('../../app');
// let Image = require('../../models/image')
//
// const mongoose = require('mongoose');
// const dbUrl = 'mongodb://localhost/photo-album-test';
//
// beforeEach(function(cb) {
//     mongoose.connect(dbUrl, function() {
//         // mongoose.connect(dbUrl);
//         Image.collection.drop();
//         var image = new Image({
//             url: 'imageurl',
//             description: 'imagedescription'
//         });
//         image.save((err) => {
//             if (err) return cb(err);
//
//             else cb();
//         });
//
//     });
// });
//
// describe('/api/images', () => {
//     describe('GET /', () => {
//         it('should respond with the array of images.', cb => {
//             supertest(app)
//                 .get('/api/images')
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(200);
//                     expect(res.body).to.have.length(1);
//                     expect(res.body[0].description).to.equal('imagedescription');
//                     cb();
//                 });
//         });
//     });
// });
//
// describe('/api/images', () => {
//     describe('POST /', () => {
//         it('should create new image', cb => {
//             supertest(app)
//                 .post('/api/images')
//                 .send({
//                     url: 'secondImageUrl',
//                     description: 'secondImageDescription'
//                 })
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(200);
//                     cb();
//                 });
//         });
//
//         it('should  not create new image - description missing', cb => {
//             supertest(app)
//                 .post('/api/images')
//                 .send({
//                     url: 'secondImageUrl'
//                 })
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(400);
//                     cb();
//                 });
//         });
//     });
// });
//
// describe('/api/images', () => {
//     describe('PUT /', () => {
//         it('should edit the image properties', cb => {
//             var newImage = {
//                 url: 'updatedUrl',
//                 description: 'updatedDesc'
//             }
//             Image.find({}, (err, image) => {
//                 if (err) return err;
//                 console.log('image:', image);
//                 var img = image[0]._id;
//                 console.log('img:', img);
//                 supertest(app)
//                 .put(`/api/images/` + img)
//                 .send(newImage)
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(200);
//                 });
//                 cb();
//             });
//         });
//
//         it('should not edit the image properties - ', cb => {
//             var newImage = {
//                 url: 'updatedUrl'
//             }
//             Image.find({}, (err, image) => {
//                 if (err) return err;
//                 console.log('image:', image);
//                 var img = image[0]._id;
//                 console.log('img:', img);
//                 supertest(app)
//                 .put(`/api/images/` + img)
//                 .send(newImage)
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(400);
//                 });
//                 cb();
//             });
//         })
//     });
// });
//
// describe('/api/images', () => {
//     // describe('DELETE /', () => {
//     //     it('should delete one image from the collection', cb => {
//     //         Image.find({}, (err, image) => {
//     //             if (err) return err;
//     //             var id = image[0]._id;
//     //             supertest(app)
//     //             .del(`/api/images/` + id)
//     //             .end((err, res) => {
//     //                 expect(err).to.not.exist;
//     //                 expect(res.statusCode).to.equal(200);
//     //
//     //                 cb();
//     //             });
//     //         });
//     //     });
//     // });
//
//     mongoose.connection.close();
// });
