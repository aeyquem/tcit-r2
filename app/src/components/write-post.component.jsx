import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../redux/actions'

const WritePost = ({ createPost }) => {

    const [post, setPost] = useState({ name: '', description: '' });

    const submitPost = async (event) => {
        event.preventDefault();

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(post)
        }

        try {
            const response = await fetch('http://localhost:3001/post', request);
            const newPost = await response.json();
            if (response.status === 200) {
                createPost(newPost);
            }
        }
        catch (error) {
            console.log(error)
        }

        setPost({ name: '', description: '' });
    }

    const changeValue = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    }

    return (
        <div className="write-post-container">
            <span>Name:</span>
            <input type="text" placeholder="name" name="name" onChange={changeValue} value={post.name} />
            <span>Description:</span>
            <textarea name="description" placeholder="Description" onChange={changeValue} />
            <button type="submit" onClick={submitPost}>Crear post</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});



export default connect(null, mapDispatchToProps)(WritePost);