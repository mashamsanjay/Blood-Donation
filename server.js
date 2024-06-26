const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/campaigns', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'campaigns.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

// Add other routes as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
