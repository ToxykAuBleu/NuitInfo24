import express from 'express';
import { Database } from 'sqlite3';

const router = express.Router();
const db = new Database('db.sqlite');

const authenticate = (req, res, next) => {
  const auth = { login: 'ndi', password: 'ndi' }; // Change this to your desired credentials

  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  if (login && password && login === auth.login && password === auth.password) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="401"');
  res.status(401).send('Authentication required.');
};

router.get('/', authenticate, (req, res) => {
  db.all(`SELECT * FROM logins`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.render('dashboard', { attacks: rows });
  });
});

export default router;