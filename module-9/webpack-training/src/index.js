import Post from './Post';
import $ from 'jquery';
import { initAnalitics } from './analytics';
import json from './assets/json';
import Img from './assets/traversing.png';

import babel from './babel';

import './styles/index.scss'

const post = new Post("Webpack hero");

console.log(JSON.stringify(json));
console.log(Img);

console.log(post.toString());
initAnalitics();

$('.title').html(post.toString());