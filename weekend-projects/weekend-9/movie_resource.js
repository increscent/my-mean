var express = require('express');
var router = express.Router();
var models = require('./models.js');

// read
router.get('/', function (req, res) {
	models.movie.find({}, function (err, data) {
		res.json(data);
	})
});

router.get('/:id', function (req, res) {
	models.movie.findOne({_id: req.params.id}, function (err, data) {
		if (!data) {
			res.send('id not found');
			return;
		}
		res.json(data);
	})
});

// create
router.post('/', function (req, res) {
	if (!req.body.name) {
		res.send('invalid post');
		return;
	}
	var movie = new models.movie(req.body);
	movie.save(function (err, data) {
		if (err) {
			res.send('create failed');
			return;
		}
		res.send('create successful');
	});
});

// update
router.put('/', function (req, res) {
	models.movie.findOne({_id: req.body._id}, function (err, data) {
		if (!data) {
			res.send('id not found');
			return;
		}
		for (var key in req.body) {
			data[key] = req.body[key];
		}
		data.save(function (err, data) {
			if (err) {
				res.send('update falied');
				return;
			}
			res.send('update successful');
		});
	});
});

// delete
router.delete('/:id', function (req, res) {
	models.movie.findOne({_id: req.params.id}, function (err, data) {
		if (!data) {
			res.send('id not found');
			return;
		}
		data.remove( function (err, data) {
			if (err) {
				res.send('delete failed');
				return;
			}
			res.send('delete successful');
		});
	});
});

module.exports = router;