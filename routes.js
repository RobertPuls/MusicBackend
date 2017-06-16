const express = require("express");
const router = express.Router();
const query = require("./queries");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error("Invalid ID"));
}

function validItem(item) {
  const hasName = typeof item.name == "string" && item.name.trim() != "";
  const hasGenre = typeof item.genre == "string" && item.genre.trim() != "";
  const hasAlbum = typeof item.album_name == "string" && item.album_name.trim() != "";
  const hasUser = typeof item.user_id == "number";
  return hasName && hasGenre && hasAlbum && hasUser;
}

router.get("/users", (req, res) => {
  query.getUsers().then(users => res.json(users));
});

router.get("/users/:id", isValidId, (req, res) => {
  query.getUser(req.params.id).then(user => res.json(user));
});

router.get("/users/:id/albums", isValidId, (req, res) => {
  query.getMusicByUser(req.params.id).then(userMusic => res.json(userMusic));
});

router.post("/users/:id/albums", isValidId, (req, res, next) => {
  if (validItem(req.body)) {
    query.addMusicByUser(req.body).then(userMusic => res.json(userMusic));
  }
  else{
    next(new Error("Invalid Item"));
  }
});

module.exports = router;
