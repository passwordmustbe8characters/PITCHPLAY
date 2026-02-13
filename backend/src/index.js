require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // <-- fixed path

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "PitchPlay API is live 🚀"
  });
});


// Routes
app.use('/api/newsletter', require('./routes/newsletter.Route')); // <-- fixed path

// in backend/src/index.js or a new route
app.get('/api/newsletter/list', (req, res) => {
  const subs = JSON.parse(fs.readFileSync(subsFile, 'utf8') || '[]');
  res.json(subs);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
