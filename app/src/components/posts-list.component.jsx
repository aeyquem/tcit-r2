import React, { useEffect } from 'react'
import { loadPosts } from '../redux/actions'
import { connect } from 'react-redux'


const PostList = ({ posts, loadPosts, textFilter }) => {

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

    const filterPosts = posts.filter(p => p.name.toLowerCase().includes(textFilter));

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
        // <div className="table-container">
        <table className="posts-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filterPosts.map(post => {
                    return <tr key={post.id}>
                        <td className="p-name">
                            <div className="ovf">
                                {post.name}
                            </div>
                        </td>
                        <td className="p-description">
                            <div className="ovf">{post.description}</div>
                        </td>
                        <td className="p-action">
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        // </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    textFilter: state.textFilter
})

const mapDispatchToProps = (dispatch) => ({
    loadPosts: (posts) => dispatch(loadPosts(posts))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);