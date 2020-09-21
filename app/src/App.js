import React, { Fragment, useEffect } from 'react';
import './App.css';
import FilterPosts from './components/filter-posts.component';
import PostList from './components/posts-list.component';
import WritePost from './components/write-post.component';


function App() {

  return (
    <Fragment>
      <WritePost />
      <FilterPosts />
      <PostList />
    </Fragment>
  );
}



export default (App);
