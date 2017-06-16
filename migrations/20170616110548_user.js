
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("user", (table) => {
    table.increments("id");
    table.string("user_img").defaultTo("https://tracker.moodle.org/secure/attachment/30912/f3.png").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table.boolean("is_active").defaultTo(true).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
