const Twit = require('twit');
require('dotenv/config');

const apikey = process.env.API_KEY
const apiSecretkey = process.env.API_KEY_SECRET
const accessToken = process.env.ACCESS_TOKEN
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

var T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretkey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,

})

module.exports = T;

