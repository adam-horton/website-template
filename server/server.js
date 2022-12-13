const express = require('express');
const path = require('path');
const env = require('dotenv');

const PORT = process.env.PORT || 3001;
const reactBuild = path.join(__dirname, '..', 'client', 'build');

const app = express();
app.use(express.static(reactBuild));

app.get('/api', (req, res) => {
    res.send({ message: 'Hello World!' });
})

app.get('*', (req, res) => {
    res.sendFile(path.join(path.join(reactBuild, 'index.html')));
})


app.listen(PORT, ()=>console.log('server is running on ' + PORT));
