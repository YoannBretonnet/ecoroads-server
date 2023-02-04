/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;


/*
 * Vars
 */
const app = express();
const server = Server(app);

const port = 3001;

const db = {
  users: {
    'john@chat.io': {
      password: 'test',
      username: 'John',
      color: '#c23616',
    },
    'carol@chat.io': {
      password: 'test',
      username: 'Carol',
      color: '#009432',
    },
  }
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// Page d'accueil du serveur : GET /
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
    <p>Server has been launched<p>
    </div>
  `);
});


// Login avec vérification : POST /login
app.post('/login', (request, response) => {
  console.log('>> POST /login', request.body);

  // Extraction des données de la requête provenant du client.
  const { email, password } = request.body;

  // Vérification des identifiants de connexion proposés auprès de la DB.
  let username;
  if (db.users[email] && db.users[email].password === password) {
    username = db.users[email].username;
  }

  // Réponse HTTP adaptée.
  if (username) {
    console.log('<< 200 OK', username);
    response.json({
      pseudo: username,
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
