'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table) {
		table.increments('id').primary();
		table.string('username');
		table.string('firstName');
		table.string('lastName');
		table.string('email');
		table.timestamp('createDate');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
