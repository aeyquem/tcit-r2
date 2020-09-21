const express = require('express');
const cors = require('cors');
const posts = require('./controllers/posts')

const server = express();
const knex = require('knex');
const PG_URL = `postgresql://postgres:postgres@localhost:5432/TCIT`

const db = knex({
    client: 'pg',
    connection: PG_URL
});

server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
    console.log(`requested: ${req.method} ${req.url}`);
    console.log(req.body);
    next();
    console.log
})

server.get('/', (req, res) => {
    res.json('server live');
})

server.get('/posts', (req, res) => posts.getPosts(req, res, db))
server.post('/post', (req, res) => posts.createPost(req, res, db))
server.delete('/post', (req, res) => posts.deletePost(req, res, db))

const port = 3001;
server.listen(port, () => {
    console.log(`running on port ${port}`);
})