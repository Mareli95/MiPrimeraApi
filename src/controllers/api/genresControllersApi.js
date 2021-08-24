const { response } = require('express');
const DB = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
	list: (req, res) => {
		DB.Genre.findAll().then((genres) => {
			return res.status(200).json({
				meta: { status: 200, total: genres.length, url: req.originalUrl },

				data: genres,
			});
		});

		// return res.json('Estas en generos');
	},
	show: (req, res) => {
		DB.Genre.findByPk(req.params.id).then((genre) => {
			return res.status(200).json({
				data: genre,
				status: 200,
			});
		});
	},
};
