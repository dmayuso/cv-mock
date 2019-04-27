import passport from 'passport';
import local from 'passport-local';
import IDataUser from '../interfaces/IDataUser';
import { User } from '../models/index';
const bcrypt = require('bcrypt');
const LocalStrategy = local.Strategy;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
    (username: string, password: string, done: any) => {
        User.findOne({ username })
            .then((foundUser: any) => {
                if (!foundUser) {
                    done(null, false, { message: 'Incorrect username' });
                    return;
                }

                if (!bcrypt.compareSync(password, foundUser.password)) {
                    done(null, false, { message: 'Incorrect password' });
                    return;
                }

                done(null, foundUser);
            })
            .catch((err: Error) => done(err));
    }
));