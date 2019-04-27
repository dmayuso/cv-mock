import passport from 'passport';
import { User } from '../models/index';

passport.serializeUser((loggedInUser: any, cb) => {
    cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession)
        .then((userDocument: any) => {
            cb(null, userDocument);
        })
        .catch((err: Error) => {
            cb(err);
        })
});