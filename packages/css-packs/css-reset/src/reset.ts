import css from './utils/evaluate-inner';
// Reset
export default css`
  html,
  body {
    margin: 0px;
  }
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  img,
  pre,
  form,
  fieldset {
    margin: 0;
    padding: 0;
  }
  img,
  fieldset {
    border: 0;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
