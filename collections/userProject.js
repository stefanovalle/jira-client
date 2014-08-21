var bookshelf = require('../config/db-config.js');

var User = require("../models/userProject");

var userProjectCollection = bookshelf.Collection.extend({
    model: User
});

module.exports = userProjectCollection;