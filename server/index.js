const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

app.post('/api/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, hashedPassword], (error, results) => {
        if (error) {
            console.error('Error inserting user:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User created successfully' });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

