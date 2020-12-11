import * as $ from 'jquery';
import Post from '@models/post';
import {} from './analytics';
import './styles/styles.css';
const post = new Post('Webpack');
$('pre').addClass('code').html(post.toString());
console.log(post);
