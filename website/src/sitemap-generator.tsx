/*import * as router from './sitemap-routes';
import Sitemap from 'react-router-sitemap';

new Sitemap(router).build('https://rholang.netlify.com/').save('./sitemap.xml');
console.log('The sitemap was built.');*/


import React from 'react';
import PageIcon from '@atlaskit/icon/glyph/page';
import { Directory } from './types';
import buildNavGroups from './containers/DesktopNav/utils/buildNavGroups';
import { externalPackages as packages, docs, patterns} from './site';

export type DocsNavProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  pathname: string;
  docs: Directory;
};


const Test = () => {
  const groups = buildNavGroups('docs', PageIcon, "test", docs);
  console.log(groups)
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
