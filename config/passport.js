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
            .fetch()
            .then(function(user) {
                if (!user) return done(null, false);
                return done(null, user.attributes);
            });
    }
));

