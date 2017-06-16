
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("music").del()
    .then(function () {
      // Inserts seed entries
      return knex("music").insert([
        {
          "name": "Blink-182",
          "genre": "punk rock",
          "album_name": "Enema of the State",
          "album_img": "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.scdn.co%2Fimage%2F13f894c1300cbdda027ff948ee963640c5126d29",
          "user_id": 1
        },
        {
          "name": "311",
          "genre": "rap metal",
          "album_name": "311",
          "album_img": "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F98%2F10%2Fe6%2F9810e6677a481179f9f0415bf14236af.jpg",
          "user_id": 1
        },
        {
          "name": "The Swellers",
          "genre": "punk rock",
          "album_name": "Good for me",
          "album_img": "https://upload.wikimedia.org/wikipedia/en/e/e6/The-Swellers-Good-For-Me.jpg",
          "user_id": 2
        },
        {
          "name": "Our Last Night",
          "genre": "rock",
          "album_name": "Selective Hearing",
          "album_img": "https://is3-ssl.mzstatic.com/image/thumb/Music127/v4/33/f6/d4/33f6d4e0-801c-ae04-ca6d-ec9bce30cb94/source/1400x0w.jpg",
          "user_id": 1
        },
        {
          "name": "Empire of the Sun",
          "genre": "electronic",
          "album_name": "Walking on a Dream",
          "album_img": "https://images-na.ssl-images-amazon.com/images/I/61AkFKuTgBL.jpg",
          "user_id": 2
        },
        {
          "name": "Starset",
          "genre": "rock",
          "album_name": "Vessels",
          "album_img": "https://images.genius.com/96c9705db08ac1a52f9910d020c00860.1000x1000x1.jpg",
          "user_id": 2
        },
        {
          "name": "Trapt",
          "genre": "rock",
          "album_name": "Someone in Control",
          "album_img": "https://vignette1.wikia.nocookie.net/lyricwiki/images/c/cb/Trapt_-_Someone_In_Control.jpg/revision/latest?cb=20081025143135",
          "user_id": 3
        },
        {
          "name": "Sylar",
          "genre": "rock",
          "album_name": "Help!",
          "album_img": "http://cdn-images.deezer.com/images/cover/7b193741048545376a63a83460ae2f03/1400x1400.jpg",
          "user_id": 3
        },
        {
          "name": "M83",
          "genre": "electronic",
          "album_name": "Hurry up, We're Dreaming",
          "album_img": "https://img.discogs.com/cb8plUB8xByF3W2G2-K4DpgwP4E=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3162054-1339506737-6160.jpeg.jpg",
          "user_id": 3
        },
      ]);
    });
};
