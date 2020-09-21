import postActions from './types';

export const loadPosts = (posts) => {
    return {
        type: postActions.LOAD_POSTS,
        payload: posts
    }
}

export const createPost = (post) => {
    return {
        type: postActions.CREATE_POST,
        payload: post
    }
}

export const filterPost = (text) => {
    return {
        type: postActions.FILTER_POST,
        payload: text
    }
}