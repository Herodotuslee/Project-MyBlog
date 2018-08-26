
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {comment:"Nice!", user_id:1 ,post_id:1},
      ]);
    });
};
