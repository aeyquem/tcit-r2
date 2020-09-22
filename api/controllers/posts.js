const createPost = (req, res, db) => {
    const { name, description } = req.body;
    db('posts')
        .returning('*')
        .insert({ name: name, description: description })
        .then(result => res.status(200).json(result[0]))
        .catch(error => {
            res.status(400).json('unable to create post')
            console.log(error)
        });
}

const getPosts = (req, res, db) => {
    db('posts')
        .orderBy('id')
        .then(r => res.json(r))
        .catch(error => {
            res.status(400).json('unable get posts')
            console.log(error)
        });
}

const deletePost = (req, res, db) => {
    const { id } = req.body;
    db('posts')
        .del()
        .where('id', id)
        .returning('*')
        .then(r => res.status(200).json(r))
        .catch(error => {
            res.status(400).json('unable to delete post')
            console.log(error)
        });
}

module.exports = {
    createPost: createPost,
    getPosts: getPosts,
    deletePost: deletePost
}