import * as React from 'react';
import ProgressBar from './ProgressBar';
import { CustomProgressBarProps } from '../types';

export default class extends React.PureComponent<CustomProgressBarProps> {
  static defaultProps = {
    value: 0,
    isIndeterminate: false,
  };

  render() {
    return (
      <ProgressBar
        {...this.props}
        theme={(currentTheme, props) => {
          const theme = currentTheme(props);
          return {
            ...theme,
            container: {
              ...theme.container,
              background: 'rgba(255, 255, 255, 0.5)',
            },
            bar: {
              ...theme.bar,
              background: 'white',
            },
          };
        }}
      />
    );
  }
}
