const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
const PORT = process.env.PORT ?? '8080'
const HOST = process.env.HOST ?? 'localhost'

app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`));