exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table)=>{
    table.increments();
    table.text('comment');
    table.integer('user_id')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    table.integer('post_id')
      .references('id')
      .inTable('post')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
