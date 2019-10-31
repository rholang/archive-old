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
    const contentDir = fs.getDirectories(content.children)[0]
    const docsDir = fs.getDirectories(contentDir.children)[0]
    const found = fs.getFiles(docsDir.children)[0];
    if (!found) return <FourOhFour />;
    return <Redirect to={`/docs/${fs.normalize(contentDir.id)}/${fs.normalize(docsDir.id)}/${fs.normalize(found.id)}`} />;
  }

  const filePath = `content/${rootId}/${docId}`;
  const found = fs.findNormalized(content, filePath);

  const Content = Loadable<{}, ResolvedMD>({
    loader: async () =>
      fs.isFile(found as File) ? await (found as File).exports() : {},
    loading: () => <Loading />,
    render(md) {
      const docDetails = md.default || {};
      const { content, data = {} } = docDetails;
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
