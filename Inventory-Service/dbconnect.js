const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Aupp2025';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB (Inventory Service)');
});

module.exports = mongoose;
