import PageIcon from '@atlaskit/icon/glyph/page';
import buildNavGroups from './sitemap-routes';
import { externalPackages as packages, docs, patterns} from './site';

//const { createSitemapsAndIndex } = require('sitemap')

const flattenDeep = require('lodash.flattendeep');


const Test = () => {
  const groups = buildNavGroups('docs', PageIcon, "test", docs);
  console.log(groups)

const postsUrls = groups
  .map(test =>
    test.items.map(item =>
      item.to
    ))

const flat : string[] = flattenDeep(postsUrls)

console.log(flat)


const listUrls = flat
  .map(category => ({
    url: `${category}`,
    changefreq: 'weekly',
    priority: 0.8,
  }))
console.log(listUrls,packages,patterns,listUrls)
/*const smi = createSitemapsAndIndex({
  hostname: 'http://rholang',
  sitemapName: 'sm-test',
  sitemapSize: 1,
  targetFolder: require('os').tmpdir(),
  urls: listUrls
})*/



//console.log(`Sitemap written at ${OUTPUT_FILE}`)
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
