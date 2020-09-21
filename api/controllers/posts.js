const createPost = (req, res, db) => {
    const { name, description } = req.body;
    db('posts')
        .returning('*')
        .insert({ name: name, description: description })
        .then(result => res.status(200).json(result[0]))
        .catch(error => console.log(error));
}

const getPosts = (req, res, db) => {
    db.select().from('posts')
        .then(r => res.json(r))
        .catch(error => console.log(error));
}

const deletePost = (req, res, db) => {
    const { id } = req.body;
    db('posts')
        .del()
        .where('id', id)
        .returning('*')
        .then(r => res.status(200).json(r))
        .catch(error => console.log(error));
}

module.exports = {
    createPost: createPost,
    getPosts: getPosts,
    deletePost: deletePost
}