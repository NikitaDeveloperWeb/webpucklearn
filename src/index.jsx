import * as $ from 'jquery';
import Post from '@models/post';
import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import './styles/scss.scss';
import './babel';
const post = new Post('Webpack');

console.log(post);
const App = () => $('pre').addClass('code').html(post.toString());

render(<App />, document.getElementById('App'));
