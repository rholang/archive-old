import React from 'react';
export declare type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
declare function Heading(props: {
    level: HeadingLevels;
    headingId?: string;
    showAnchorLink?: boolean;
} & React.Props<any>): JSX.Element;
export default Heading;
