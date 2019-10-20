
import buildNavGroups from './buildNavGroups';
import { externalPackages as packages, docs, patterns} from './site';


//const { createSitemapsAndIndex } = require('sitemap')

const flattenDeep = require('lodash.flattendeep');


const Test = () => {
  const groups = buildNavGroups('docs', "test", docs);
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
Test();
export default Test;

