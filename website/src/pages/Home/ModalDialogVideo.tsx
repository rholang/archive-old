import React from 'react';
import 'react-video-play/public/css/react-video-play.css';
import { DESKTOP_BREAKPOINT_MIN, MOBILE_BREAKPOINT_MAX } from '../../constants';
import styled, { css } from 'styled-components';
import { colors } from '@atlaskit/theme';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play';

import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';

const Button = styled.button`
  position: relative;
  width: 89px;
  height: 89px;
  border-radius: 50%;
  background-color: #e9f8fe;
  background-position: 34px;
  background-size: 30px 34px;
  background-repeat: no-repeat;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.21);
  transition: all 80ms linear;
  cursor: pointer;
  outline: none;
  border: none;

  :hover {
    background-color: #afafaf;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

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
      <Wrapper>
        <Button onClick={this.open}>
          <VidPlayIcon size="xlarge" label="rchain" />
        </Button>

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
      </Wrapper>
    );
  }
}
