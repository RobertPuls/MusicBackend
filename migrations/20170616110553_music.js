
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("music", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("genre").notNullable();
    table.string("album_name").notNullable();
    table.string("album_img");
    table.integer("user_id").references("user.id").unsigned().onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("music");
};
