/*import * as router from './sitemap-routes';
import Sitemap from 'react-router-sitemap';

new Sitemap(router).build('https://rholang.netlify.com/').save('./sitemap.xml');
console.log('The sitemap was built.');*/
import React from 'react';
//import Groups from './containers/DesktopNav/Groups';
import DocsNav from './containers/DesktopNav/navigations/Docs';
import { externalPackages as docs } from './site';

// external libs provided as example only

const Test = () => {
  //const abc = <Groups docs={docs} packages={packages} patterns={patterns} />
  const abc = <DocsNav pathname={'test'} docs={docs} />;
  console.log(abc);
};

export default Test;
/*
const entry = {
  type: "Burger",
  props: {
    chain: "Wahlburger",
    children: {
      type: "Patty",
      props: {
        variant: "Impossible"
      }
    }
  }
};

const mapping = {
  Burger: ({ chain, children }) => (
    <div>
      <h1>{chain}</h1>
      <div>{children}</div>
    </div>
  ),
  Patty: ({ variant }) => <span>{variant}</span>
};

const Example = () => {
  return <ReactFromJSON entry={entry} mapping={mapping} />;
};

// parsing JSON file
const pipeline = Example
  .createReadStream("./tests/mocks/perf-data.json")
  .pipe(parser())
  .pipe(streamArray())
  .pipe(map.obj(chunk => chunk.value))
  // SitemapStream does the heavy lifting
  // You must provide it with an object stream
  .pipe(new SitemapStream({ hostname: 'https://example.com/' }))

  console.log(pipeline)*/
