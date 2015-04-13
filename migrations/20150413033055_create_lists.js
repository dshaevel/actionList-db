'use strict';

exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('lists', function(table) {
			table.increments('id').primary();
			table.string('name');
			table.string('description');
			table.integer('userid').notNullable().references('id').inTable('users').onDelete('CASCADE');
		}),

		knex.raw(
			'ALTER TABLE lists ' +
			'ADD CONSTRAINT name_userid UNIQUE(name, userid);'
		)
	]);
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('lists');
};
