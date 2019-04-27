import passport from 'passport';
import express from 'express';

require('./serializers');
require('./localStrategy');

//Todo - I couldn't change app type to Express.Application got an Error using app.use.
export default (app: express.Application) => {
    app.use(passport.initialize());
    app.use(passport.session());
}