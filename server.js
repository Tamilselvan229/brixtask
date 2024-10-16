const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/trainDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const trainSchema = new mongoose.Schema({
    source: String,
    destination: String
});


const Train = mongoose.model('Train', trainSchema);


app.post('/search-trains', async (req, res) => {
    const { source, destination } = req.body;
    const train = new Train({ source, destination });
    await train.save();

    res.json({ message: `Searching trains from ${source} to ${destination}...` });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
