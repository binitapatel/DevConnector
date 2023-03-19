const express = require('express');
const connectDB = require('./config/db');
const app = express();

//  Connect Database
connectDB().then();

// Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
    console.log('req received ', req);
    res.send('API running')
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));