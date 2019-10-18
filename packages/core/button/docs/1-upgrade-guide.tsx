import { code, md } from '@atlaskit/docs';

export default md`

## v11 to v12

### ⚡️ Highlights
- **New theming API** - Button now supports the new Atlaskit theming API, which allows for powerful custom theming of Buttons and
  its internal components.
- **Speed improvements** - Button has been re-written from the ground up - on heavy-load benchmarks, Button is twice as fast 
  (taking 48% of the time to load).
- **Emotion support** - Button is now built using Emotion 10! This is part of a wider push
  for Emotion across all Atlaskit components.

### 💥 Breaking Changes:
- The old theming API is no longer supported.
- Styling a Button using Styled Components is no longer supported.
- Custom components will need refs forwarded via \`React.forwardRef()\`.
- Camel-case ARIA props have been removed in favour for standard HTML aria-* attributes. 

<br/>

---

### Theming

Button now supports the updated Theming API. Custom theming functions have access to all of Button's props, as well as the to the original ADG theme - meaning that the custom theme can
change appearance based on different props, and even ignore the ADG styling completely. Custom
themes can modify any CSS prop on the button body, the internal icons, or the loading spinner.

For more details on building a custom Button theme, see the Theming Guide.

#### Dark Mode support

In \`v11\` we would add _dark mode_ to a button as follows:

${code`<Button theme="dark">Button</Button>`}

The above code could be written in \`v12\` as:

${code`
<Button theme={(theme, props) => theme({ ...props, mode: 'dark' })}
 Button
</Button>
`}

#### Styled-components support
In \`v11\`, Button could be styled using styled-components' \`styled\` function:

${code`
import styled from 'styled-components'

const CustomButton = styled(Button)\`
  background-color: red
\`)
`}

With the shift to Emotion in \`v12\`, Emotion’s own \‘styled\’ function is a functional drop-in replacement - however this is not explicitly supported and we recommend using the new theming API in its place.

We recommend viewing the [Theming example](https://atlaskit.atlassian.com/packages/core/button/example/CustomTheme) for more information on how to use the new theming API with Button.

<br/>

---

### Custom component
If you need to work with refs in a custom component, you'll need to make sure to forward on refs yourself using \`React.forwardRef()\`. A typical use case would look like this:

${code`
const CustomButton = React.forwardRef<HTMLElement, React.AllHTMLAttributes<HTMLElement>>(
  (props, ref) => <button {...props} ref={ref} />
);

<Button component={CustomButton} />
`}

<br/>

---

### ARIA attributes

ARIA attributes for Button now use kebab-case standard in React. The old attributes have been deprecated.

In \`v11\` we would use ARIA props as follows:

${code`
<Button
  ariaExpanded
  ariaHaspopup
  ariaLabel="special button"
>
  Aria Button
</Button>
`}

The above code could be written in \`v12\` as:

${code`
<Button
  aria-expanded
  aria-haspopup
  aria-label="special button"
>
  Aria Button
</Button>
`}

<br/>

---

### ⏫ Props updated
- theme: Returns a function containing two args; the current ADG theme and props
- component: Make sure to forward refs using \`React.forwardRef()\`.

### 🙅‍ Props removed
- ariaControls: Please use **aria-controls** prop instead
- ariaExpanded: Please use **aria-expanded** prop instead
- ariaLabel: Please use **aria-label** prop instead
- ariaHaspopup: Please use **aria-haspopup** prop instead
`;
