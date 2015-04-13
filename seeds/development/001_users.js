'use strict';

exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('users').del(),

		// Inserts seed entries
		knex('users').insert({
			username: 'dshaevel',
			firstName: 'David',
			lastName: 'Shaevel',
			email: 'david@hotmail.com',
			createDate: new Date().toISOString()
		}),

		knex('users').insert({
			username: 'ilevy',
			firstName: 'Isaac',
			lastName: 'Levy',
			email: 'isaac@hotmail.com',
			createDate: new Date().toISOString()
		})
	);
};