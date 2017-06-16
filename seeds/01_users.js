
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user").del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          "email": "chase@gmail.com",
          "password": "password",
        },
        {
          "email": "rob@gmail.com",
          "password": "1234",
        },
        {
          "email": "jake@gmail.com",
          "password": "4321",
        },
      ]);
    });
};
