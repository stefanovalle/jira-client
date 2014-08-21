var bookshelf = require('../config/db-config.js');

var Filter = require("../models/filter");

var filterCollection = bookshelf.Collection.extend({
    model: Filter
});

module.exports = filterCollection;