var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use('user-local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password, done) {

        new User({'email': username, 'password' : password})
            .fetch({require: true})
            .then(function(user) {
                return done(null, user.attributes);
            }).catch(User.NotFoundError, function() {
                return done(null, false);
            }).catch(function(err) {
                return done(err);
            });
    }
));
