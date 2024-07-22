const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Specify the origin you want to allow (update as necessary)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you want to allow
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the headers you want to allow
  credentials: true, // Enable cookies to be sent with requests
};

app.use(cors(corsOptions));


// In-memory array to store users
let users = [
	{"id":1,"name":"Utsav Chatterjee","email":"abc@gmail.com"}
];

// Helper function to generate IDs
const generateId = () => {
  return users.length ? Math.max(users.map(user => user.id)) + 1 : 1;
};

// Create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: generateId(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    const { name, email } = req.body;
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: 'User is deleted!' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

