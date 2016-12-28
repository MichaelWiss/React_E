import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
   componentWillMount() {
   	   console.log('this would be a good time to call an action creator to fetch posts');
   }

	render() {
		return (
			<div>List of blog posts</div>
		);
	}
}

export default PostsIndex;
