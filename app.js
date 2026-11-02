const express = require('express');
const conn = require('./conn');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(
        'admin',
    );
});




app.listen(9000)