
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post',(table)=>{
    table.increments();
    table.string("title");
    table.text("content");
    table.string("img_url");
    table.integer("admin_id")
    .references("id")
    .inTable("admin")
    .onDelete("CASCADE")
    .index();
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("post");
};
