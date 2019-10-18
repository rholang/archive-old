import * as router from './sitemap-routes';
import Sitemap from 'react-router-sitemap';

new Sitemap(router).build('https://rholang.netlify.com/').save('./sitemap.xml');
console.log('The sitemap was built.');
