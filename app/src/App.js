import React, { Fragment, useEffect } from 'react';
import './App.css';
import FilterPosts from './components/filter-posts.component';
import PostList from './components/posts-list.component';
import WritePost from './components/write-post.component';


function App() {

  return (
    <div className="main-container">
      <WritePost />
      <div className="data-container">
        <FilterPosts />
        <PostList />
      </div>
    </div>
  );
}

export default (App);
