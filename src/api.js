const express = require ('express');
const bodyParser = require('body-parser');

const serverless = require('serverless-http');

const app = express ();

const router = express.Router();

const interestPoints = require('./interestpoint.js')


const db = {
  users: {
    'john@chat.io': {
      password: 'ecoroads2023',
      username: 'John',
      color: '#c23616',
    },
    'carol@chat.io': {
      password: 'ecoroads2023',
      username: 'Carol',
      color: '#009432',
    },
  }
};


router.use(bodyParser.json());
router.use((request, response, next) => {
 response.header('Access-Control-Allow-Origin', '*');
 // response.header('Access-Control-Allow-Credentials', true);
 response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
 
 next();
});

router.get('/', (req, res) => {
     res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
    <p>Server has been launched<p>
    </div>
  `);
});

router.post('/login', (request, response) => {
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


// Récupération des points d'intérêt : POST /map
router.post('/map', (request, response) => {
  console.log('>> POST /map', request.body);

  // Extraction des données de la requête provenant du client.
  const { categories } = request.body;

  // Récupération des point(s d'intérêt correspondant à la sélection
  const arrayResponse = interestPoints.filter(option => categories.includes(option.category))
  console.log (arrayResponse);
  
  // Réponse HTTP adaptée.
  if (arrayResponse) {
    response.json({ 
      arrayResponse
      });   
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

app.use('/.netlify/functions/api', router);



module.exports.handler = serverless(app);