import {
  colors,
  typography,
  gridSize,
  fontFamily,
  codeFontFamily,
} from '@atlaskit/theme';
import evaluateInner from './utils/evaluate-inner';

export default evaluateInner`
  body,
  html {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #fff;
    color: ${colors.N800};
    font-family: ${fontFamily};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857142857143;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    text-decoration-skip-ink: auto;
  }

  /* Default margins */
  p,
  ul,
  ol,
  dl,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  form,
  {
    margin: ${gridSize() * 1.5}px 0 0 0;
  }




  /* Links */
  a {
    color: ${colors.B400};
    text-decoration: none;
  }
  a:hover {
    color: ${colors.B300};
    text-decoration: underline;
  }
  a:active {
    color: ${colors.B500};
  }
  a:focus {
    outline: 2px solid ${colors.B100};
    outline-offset: 2px;
  }

  p {
    margin-top:5px;
  }

  /* Headings */
  h1 {
    ${typography.h800()}
  }
  h2 {
    ${typography.h700()}
  }
  h3 {
    ${typography.h600()}
  }
  h4 {
    ${typography.h500()}
  }
  h5 {
    ${typography.h400()}
  }
  h6 {
    ${typography.h300()}
  }

  /* Lists */
  ul,
  ol,
  dl {
    padding-left: ${gridSize() * 5}px;
  }
  [dir='rtl']ul,
  [dir='rtl']ol,
  [dir='rtl']dl {
    padding-left: 0;
    padding-right: ${gridSize() * 5}px;
  }

  dd,
  dd + dt,
  li + li {
    margin-top: ${gridSize() / 2}px;
  }
  ul ul:not(:first-child),
  ol ul:not(:first-child),
  ul ol:not(:first-child),
  ol ol:not(:first-child) {
    margin-top: ${gridSize() / 2}px;
  }

  /* remove top margin for first element */
  p:first-child,
  ul:first-child,
  ol:first-child,
  dl:first-child,
  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child,
  blockquote:first-child,
  pre:first-child,
  form:first-child,
  table:first-child {
    margin-top: 0;
  }

  /* Quotes */

  q {
    color: inherit;
  }

  blockquote {
    background-color: #fff5c5;
    border-left-color: #ffe564;
    border-left-width: 9px;
    border-left-style: solid;
    padding: 20px 45px 20px 26px;
    margin-bottom: 30px;
    margin-top: 20px;
    margin-left: 0px;
    margin-right: 0px;

  }

  /* Other typographical elements */
  small {
    ${typography.h100()}
    font-weight: normal;
  }

  code,
  kbd {
    font-family: ${codeFontFamily};
  }

  var,
  address,
  dfn,
  cite {
    font-style: italic;
  }

  abbr {
    border-bottom: 1px #ccc dotted;
    cursor: help;
  }
`;
