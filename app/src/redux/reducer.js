import postActions from './types'

const INITIAL_STATE = {
    posts: [],
    displayPosts: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    console.log('action: ' + action.type)
    switch (action.type) {
        case postActions.LOAD_POSTS:
            return {
                ...state,
                posts: action.payload,
                displayPosts: action.payload
            }
        case postActions.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                displayPosts: [...state.posts, action.payload],
            }
        case postActions.FILTER_POST:
            return {
                ...state,
                displayPosts: state.posts.filter(p => p.name.includes(action.payload))
            }
        default:
            return state;
    }
}

export default rootReducer;