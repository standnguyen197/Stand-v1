var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Account = require('../models/Account');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
	Account.find(function(err, person) {
		if (err) {
			return next(err);
		} else {
			res.json(person);
		}
	});
});
router.post('/', function(req, res, next) {
    // Thông tin để nhập vào Database!
	var newAuth = new Account();
	newAuth._id = req.body.idProfile;
	newAuth.name = req.body.nameProfile;
	newAuth.email = req.body.emailProfile;
	newAuth.avatar = req.body.avatarProfile;

	// Info Facebook!

	Account.count({ _id: req.body.idProfile }, function(err, countValue) {
        // Nếu có đăng ký rồi thì lấy info post từ Client trả về Client
		if (countValue == '1') {
		// Nếu id bằng Nguyễn Đức Tú thì có quyền admin
		Account.findOne({ _id: req.body.idProfile }, (err, person) => {
			if (err){
				return handleError(err);

			}else{
				const infoData = {
                    _id: person._id,
                    name: person.name,
                    email: person.email,
                    avatar: person.avatar,
                    role_id: person.role_id
				};
				const token = jwt.sign({infoData},'hoenhoenqueen')
				// Gửi data về client
				res.json({
					token: token,
					infoData
				});
			}
		  });

		} else {
        // Nếu chưa đăng ký thì đăng ký account mới!

        // Nếu là id của Nguyễn Đức Tú thì thêm quyền Admin
			if (req.body.idProfile == '374440739664862') {
				var infoData = {
					_id: req.body.idProfile,
					name: req.body.nameProfile,
					email: req.body.emailProfile,
					avatar: req.body.avatarProfile,
					role_id: '1'
				};
				newAuth.role_id = '1';
				newAuth.save(function(err) {
					if (err) {
						return handleError(err);
					} else {
						const token = jwt.sign({infoData},'hoenhoenqueen')
						// Gửi data về client
						res.json({
							token: token,
							infoData
						});
					}
				});
			} else {
        // Không thêm quyền admin nếu không phải Nguyễn Đức Tú
					var infoData = {
					_id: req.body.idProfile,
					name: req.body.nameProfile,
					email: req.body.emailProfile,
					avatar: req.body.avatarProfile,
					role_id: '0'
				};
				newAuth.save(function(err) {
					if (err) {
						return handleError(err);
					} else {
						const token = jwt.sign({infoData},'hoenhoenqueen')
						// Gửi data về client
						res.json({
							token: token,
							infoData
						});
					}
				});
			}
		}
	});
});

/* GET SINGLE BOOK BY ID */
// router.get('/:id', function(req, res, next) {
//   Book.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* SAVE BOOK */

/* UPDATE BOOK */
// router.put('/:id', function(req, res, next) {
//   console.log(req.body);
//   Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* DELETE BOOK */
// router.delete('/:id', function(req, res, next) {
//   Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
