import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { filterPost } from '../redux/actions'



const FilterPosts = ({ filterPost }) => {

    const onFilterPosts = (event) => {
        event.preventDefault();
        filterPost(event.target.value);
    }

    return (
        <div className="filter-container">
            <input type="text"
                id="filter-text"
                name="filter-text"
                placeholder="nombre del autor"
                onChange={onFilterPosts}>
            </input>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    filterPost: (text) => dispatch(filterPost(text))
})

export default connect(null, mapDispatchToProps)(FilterPosts);