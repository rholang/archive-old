import React from 'react';
import 'react-video-play/public/css/react-video-play.css';

import Button from '@atlaskit/button';
import { colors } from '@atlaskit/theme';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';

const headerStyles: React.CSSProperties = {
  paddingTop: 0,
  position: 'relative',
};
const Header = () => <div style={headerStyles} />;

const bodyStyles: React.CSSProperties = {
  padding: 0,
  backgroundColor: colors.N30,
  overflowY: 'auto',
  overflowX: 'auto',
};

const Body = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div ref={ref} style={bodyStyles}>
      {props.children}
    </div>
  );
});

interface State {
  isOpen: boolean;
}

export default class ModalDemo extends React.Component<{}, State> {
  state: State = { isOpen: false };

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  secondaryAction = ({ target }: any) => console.log(target.innerText);

  render() {
    const { isOpen } = this.state;
    const actions = [
      { text: 'Close', onClick: this.close },
      { text: 'Secondary Action', onClick: this.secondaryAction },
    ];

    const Content = Loadable({
      loader: () => import('./VideoPlayer'),
      loading: () => <Loading />,
    });

    return (
      <div style={{ padding: 16 }}>
        <Button onClick={this.open}>Open Modal</Button>

        <ModalTransition>
          {isOpen && (
            <ModalDialog
              width="70%"
              key={name}
              actions={['footer', 'both'].includes(name) ? actions : undefined}
              components={{
                Header: Header,
                Body: Body,
                Container: 'div',
              }}
              heading={
                ['header', 'both'].includes(name) ? `Modal: ${name}` : undefined
              }
              onClose={this.close}
              {...this.props}
            >
              <Content />
            </ModalDialog>
          )}
        </ModalTransition>
      </div>
    );
  }
}
