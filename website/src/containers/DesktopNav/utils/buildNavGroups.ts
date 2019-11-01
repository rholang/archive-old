import React from 'react';
import { Directory, NavGroupItem, File } from '../../../types';
import * as fs from '../../../utils/fs';

export type groupType = {
  title?: string;
  items: Array<NavGroupItem>;
};
export default function buildNavGroups(
  prefix: string,
  // TODO: [strictFunctionTypes] Fix any
  Icon: React.ComponentType<any>,
  pathname: string,
  dir: Directory,
) {


  console.log(dir)
  const directories = fs.getDirectories(dir.children)
  const directorySelected = directories.filter(item => item.id === prefix)[0]

  return directorySelected.children.map(
    (group: File | Directory): groupType => {
      if (group.type === 'file') {
        return {
          items: [
            {
              to: `docs/${prefix}/${fs.normalize(group.id)}`,
              isSelected: (pathname, to) => pathname.startsWith(to),
              title: fs.titleize(group.id),
              // icon: <Icon label={`${fs.titleize(group.id)} icon`} />,
            },
          ],
        };
      }



      return {
        title: fs.titleize(group.id),
        items: group.children.map(doc => {

          return {
            to: `${fs.normalize(doc.id)}`,
            isSelected: (pathname: string, to: string) =>
              pathname.startsWith(to),
            title: fs.titleize(doc.id),
            // icon: <Icon label={`${fs.titleize(doc.id)} icon`} />,
          };
        }),
      };
    },
  );
}
