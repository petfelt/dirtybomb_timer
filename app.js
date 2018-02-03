const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// Connect to database
mongoose.connect(config.database);

// Tell use we're connected
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// If Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

const port = process.env.PORT || 8000;

// Allows other domains to "ping" this one.
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

// passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
  res.send('DB Timer is updating. Please wait 10 - 20 seconds and refresh your page. If this message still exists after several refreshes, the website might be broken. Contact the website admin at http://www.reddit.com/u/rauthospoon/ if you have issues.');
});

app.listen(port, () => {
  // console.log('Server started on port '+port);
});
