// const http = require('http');

const port = 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end("Hello, world!");
// })

// server.listen(port, () => {
//     console.log(`server listening on ${port}`)
// });


// --------------- USING EXPRESS ----------
import express from 'express'
const app = express();
app.listen(port, () => {
    console.log(`server listening on ${port}`)
});


