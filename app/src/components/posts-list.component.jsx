import React, { useEffect } from 'react'
import { loadPosts } from '../redux/actions'
import { connect } from 'react-redux'


const PostList = ({ posts, loadPosts }) => {

    useEffect(() => {
        loadPostsAsync();
    }, [])

    const loadPostsAsync = async () => {
        try {
            const response = await fetch(`http://localhost:3001/posts`);
            const data = await response.json();
            loadPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async (id) => {
        try {
            const request = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ id })
            }
            const response = await fetch('http://localhost:3001/post', request);
            if (response.status === 200) {
                loadPostsAsync()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => {
                    return <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.description}</td>
                        <td><button onClick={() => deletePost(post.id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

const mapStateToProps = (state) => ({
    posts: state.displayPosts
})

const mapDispatchToProps = (dispatch) => ({
    loadPosts: (posts) => dispatch(loadPosts(posts))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);