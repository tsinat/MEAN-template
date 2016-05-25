// 'use strict';
//
// const supertest = require('supertest');
// const expect = require('chai').expect;
//
// let app = require('../../app');
// let Album = require('../../models/album')
//
// const mongoose = require('mongoose');
// const dbUrl = 'mongodb://localhost/photo-album-test';
//
// beforeEach(function(cb) {
//     mongoose.connect(dbUrl, function() {
//         // mongoose.connect(dbUrl);
//         Album.collection.drop();
//         var album = new Album({
//             name: 'myalbum'
//         });
//         album.save((err) => {
//             if (err) return cb(err);
//
//             else cb();
//         });
//
//     });
// });
//
// describe('/api/albums', () => {
//     describe('GET /', () => {
//         it('should respond with the array of albums.', cb => {
//             supertest(app)
//                 .get('/api/albums')
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(200);
//                     expect(res.body).to.have.length(1);
//                     expect(res.body[0].name).to.equal('myalbum');
//                     cb();
//                 });
//         });
//     });
// });
//
// describe('/api/albums', () => {
//     describe('POST /', () => {
//         it('should create new album', cb => {
//             supertest(app)
//                 .post('/api/albums')
//                 .send({
//                     name: 'secondAlbum'
//                 })
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(200);
//                     cb();
//                 });
//         });
//
//         it('should  not create new album - name missing', cb => {
//             supertest(app)
//                 .post('/api/albums')
//                 .send({})
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(400);
//                     cb();
//                 });
//         });
//     });
// });
//
// describe('/api/albums', () => {
//     describe('PUT /', () => {
//         it('should edit the album properties', cb => {
//             var newAlbum = {
//                 name: 'editedName'
//             }
//             Album.find({}, (err, album) => {
//                 if(err) return err;
//                 console.log('album:',album);
//                 var img = album[0]._id;
//                 console.log('img:', img);
//                 supertest(app)
//                 .put(`/api/albums/${img}`)
//                 .send(newAlbum)
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(200);
//                 })
//                 cb();
//             })
//         });
//         it('should not edit the album properties - there is no name in the newAlbum', cb => {
//             var newAlbum = {
//             }
//             Album.find({}, (err, album) => {
//                 if(err) return err;
//                 console.log('album:',album);
//                 var img = album[0]._id;
//                 console.log('img:', img);
//                 supertest(app)
//                 .put(`/api/albums/${img}`)
//                 .send(newAlbum)
//                 .end((err, res) => {
//                     expect(err).to.not.exist;
//                     expect(res.statusCode).to.equal(400);
//                 })
//                 cb();
//             })
//         });
//
//     });
//     mongoose.connection.close();
// });
