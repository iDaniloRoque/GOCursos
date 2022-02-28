/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNul().unique()
      table.string('password').notNull()
      table.string('admin').notNull().defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
