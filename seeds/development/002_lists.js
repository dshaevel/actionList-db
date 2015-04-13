'use strict';

exports.seed = function(knex, Promise) {
	var david_id = knex('users').where({
		username: 'dshaevel'
	}).select('id');

	var isaac_id = knex('users').where({
		username: 'ilevy'
	}).select('id');

	return Promise.join(
		// Deletes ALL existing entries
		knex('lists').del(),

		// Inserts seed entries
		knex('lists').insert({
			name: 'shopping',
			description: 'David\'s Shopping List',
			userid: david_id
		}),

		knex('lists').insert({
			name: 'shopping',
			description: 'Isaac\'s Shopping List',
			userid: isaac_id
		})
	);
};