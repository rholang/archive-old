import React from 'react';
import { md, code, DevPreviewWarning, Example } from '@atlaskit/docs';

export default md`
  ${<DevPreviewWarning />}

  ${(
    <Example
      packageName="@atlaskit/motion"
      Component={require('../examples/fade-in-grid-of-elements').default}
      title="Staggered entrance with fade in"
      source={require('!!raw-loader!../examples/fade-in-grid-of-elements')}
    />
  )}

  ## Documentation

  All the documentation can be found in the **sidebar nav links** 👈

  ### Quick links

  - [Variables](/packages/helpers/motion/docs/variables)
  - [Entering motions](/packages/helpers/motion/docs/entering-motions)
  - [Accessibility](/packages/helpers/motion/docs/accessibility)

  ## Library Considerations

  ### CSS over Javascript

  Where possible this library will use CSS exclusively,
  and only use Javascript when it is impossible otherwise.
  This is primarily for **Performance**,
  but also for allowing us to have motion run without waiting for Javascript to execute on initial load (very important for our SSR rendered products).

  What this boils down to is:

  - Use CSS animation/transitions over animation engines unless there is no possible alternative
  - Avoid any client side calculations to power motion if it can be done with CSS
  - Emulating any spring styled motions with CSS animation
  - Highly interactive and/or gestural motions would be contenders for using an animation engine, but we're not there yet

  ### Not rendering markup

  Every component in this library will not render markup,
  they will just pass down \`props\` for you to wire up.
  Because of this the majority of _motion components_ will utilise children as props or hooks.

  <br />

  ${code`
  <FadeIn>
    {props => <div {...props} />}
  </FadeIn>
  `}

  ### Motion abstractions

  We want you to use abstractions (components) to power your motion and to not worry about underlying tech.
  We _also_ want a consistent experience across our products.
  Need a particular motion that doesn't exist yet?

  Think about contributing to \`@atlaskit/motion\` so all products at Atlassian can benefit.

  ### Reduced motion support

  While motion is utilised to create relationships,
  show the most important thing on the page,
  and create delight,
  it's also important to allow our users to opt out of it.
  Every motion component should use the provided utilities (see: [Accessibility](/packages/helpers/motion/docs/accessibility)).
`;
