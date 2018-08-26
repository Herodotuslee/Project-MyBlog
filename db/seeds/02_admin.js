
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {name: 'hrabal', email: 'bonjouralbertlee@gmail.com', password:'galvanize'},
      ]);
    });
};
