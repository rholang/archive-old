import React from 'react';
import { match } from 'react-router';
import { Redirect } from 'react-router-dom';
import Loadable from '../components/WrappedLoader';
import * as fs from '../utils/fs';
import { File } from '../types';
import Page from '../components/Page';
import Markdown from '../components/Markdown';
import FourOhFour from './FourOhFour';
import Loading from '../components/Loading';
import { content } from '../site';

export type DocProps = {
  match: match<Record<string, string>>;
   // TODO: replace with react router
};

export type ResolvedMD = {
  default?: {
    content?: string;
    data?: Object;
  };
};




export default function Document({
  match: {
    params: { rootId, docId }
  },

}: DocProps) {


  if (!docId) {
    const dir = content.children[0]
    const file = dir.children[0];
    console.log(dir)
    const found = fs.getFiles(file.children)[0];
    if (!found) return <FourOhFour />;
    return <Redirect to={`/docs/${fs.normalize(dir.id)}/${fs.normalize(file.id)}/${fs.normalize(found.id)}`} />;
  }

  const filePath = `content/getting-started`;
  const found = fs.findNormalized(content, filePath);
  console.log("content")
  console.log(content)
  console.log(found)
  const Content = Loadable<{}, ResolvedMD>({
    loader: async () =>
      fs.isFile(found as File) ? await (found as File).exports() : {},
    loading: () => <Loading />,
    render(md) {
      const docDetails = md.default || {};
      const { content, data = {} } = docDetails;
      console.log("con2")
      console.log(md)
      if (content) {
        return <Markdown {...data}>{content}</Markdown>;
      }
      return <FourOhFour />;
    },
  });

  return (
    <Page>
      <Content />
    </Page>
  );
}
