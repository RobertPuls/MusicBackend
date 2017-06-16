const knex = require("./db/knex");

module.exports = {
  getUsers: function(){
  return knex("user");
  },
  getUser: function(user_id){
    return knex("user").where("id", user_id).first();
  },
  getMusicByUser: function(user_id){
    return knex("user").innerJoin("music", "user.id", "music.user_id").where("user.id", user_id);
  },
  addMusicByUser: function(musicItem){
    return knex("music").insert(musicItem).returning("*");
  }
};
