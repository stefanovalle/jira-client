var bookshelf = require('../config/db-config.js');

var UserFilter = require("../models/userFilter");

var userFilterCollection = bookshelf.Collection.extend({
    model: UserFilter
});

module.exports = userFilterCollection;