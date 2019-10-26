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
import { docs } from '../site';

export type DocProps = {
  match: match<Record<string, string>>; // TODO: replace with react router
};

export type ResolvedMD = {
  default?: {
    content?: string;
    data?: Object;
  };
};

export default function Document({
  match: {
    params: { docId },
  },
}: DocProps) {
  console.log(docId)
  if (!docId) {
    const dir = docs.children[0];
    const file = docs.children[0].children;
    const found = fs.getFiles(file)[0];
    console.log(found)
    console.log(dir)
    if (!found) return <FourOhFour />;
    return <Redirect to={`/docs/${dir.id}/${fs.normalize(found.id)}`} />;
  }

  const filePath = `docs/${docId}`;
  const found = fs.findNormalized(docs, filePath);

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
