import React, { useState, useEffect } from 'react'
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
    }

    const changeValue = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    }

    return (
        <div className="write-post-container">
            <form onSubmit={submitPost} method="post">
                Name:
                <input type="text" placeholder="name" name="name" onChange={changeValue} />
                Desc:
                <input type="text" name="description" placeholder="Description" onChange={changeValue} />
                <button type="submit" onClick={submitPost}>Crear post</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});



export default connect(null, mapDispatchToProps)(WritePost);