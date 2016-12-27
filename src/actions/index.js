import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const Root_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=09hj9h9h9h9hh9h';


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`;)

	return {
		type: FETCH_POSTS,
		payload: request
    };
}