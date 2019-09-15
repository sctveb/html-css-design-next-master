const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8081;
const COOKIE = process.env.COOKIE_SECRET || "test";

const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();
    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(COOKIE));
    server.use(expressSession({
        resave: false,
        saveUninitialized: false,
        secret: COOKIE,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }));

    //   server.get('/hashtag/:tag', (req, res) => {
    //     return app.render(req, res, '/hashtag', { tag: req.params.tag });
    //   });

    //   server.get('/user/:id', (req, res) => {
    //     return app.render(req, res, '/user', { id: req.params.id });
    //   });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, () => {
        console.log(`next+express running on port ${PORT}`);
        console.log(`${COOKIE}`)
    });
});
