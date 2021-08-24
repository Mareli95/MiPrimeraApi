const { response } = require('express');
const DB = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
	guardar: (req, res) => {
		//
		DB.Movie.create(req.body).then((movie) => {
			return res.status(200).json({
				data: movie,
				status: 200,
				created: 'Se creo la película',
			});
		});
	},

	delete: (req, res) => {
		DB.Movie.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then((response) => {
				return res.json(response);
			})
			.catch((error) => res.send(error));
	},
};
