import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
// $FlowFixMe useContext
import React, { useContext } from 'react';
import ArrowRightCircleIcon from '@atlaskit/icon/glyph/arrow-right-circle';
import Spinner from '@atlaskit/spinner';
import { withNavigationViewController } from '../../../view-controller';
import ConnectedItem from '../ConnectedItem';
import { ScrollProviderRef } from '../../presentational/ContentNavigation/primitives';

var After = function After(_ref) {
  var afterGoTo = _ref.afterGoTo,
      spinnerDelay = _ref.spinnerDelay,
      incomingView = _ref.incomingView,
      isActive = _ref.isActive,
      isHover = _ref.isHover,
      isFocused = _ref.isFocused;

  if (incomingView && incomingView.id === afterGoTo) {
    return ___EmotionJSX(Spinner, {
      delay: spinnerDelay,
      invertColor: true,
      size: "small"
    });
  }

  if (isActive || isHover || isFocused) {
    return ___EmotionJSX(ArrowRightCircleIcon, {
      primaryColor: "currentColor",
      secondaryColor: "inherit"
    });
  }

  return null;
};

var GoToItem = function GoToItem(gotoItemProps) {
  var scrollProviderRef = useContext(ScrollProviderRef);
  var spinnerDelay = gotoItemProps.spinnerDelay || 200;

  var handleClick = function handleClick(e) {
    var goTo = gotoItemProps.goTo,
        navigationViewController = gotoItemProps.navigationViewController;
    e.preventDefault();

    if (typeof goTo !== 'string') {
      return;
    } // Hijack focus only if the event is
    // from a keyboard.


    if (e.clientX === 0 && e.clientY === 0 && scrollProviderRef.current) {
      scrollProviderRef.current.focus();
    }

    navigationViewController.setView(goTo);
  };

  var afterProp = gotoItemProps.after,
      goTo = gotoItemProps.goTo,
      navigationViewController = gotoItemProps.navigationViewController,
      rest = _objectWithoutProperties(gotoItemProps, ["after", "goTo", "navigationViewController"]);

  var after = typeof afterProp === 'undefined' ? After : afterProp;
  var propsForAfterComp = {
    afterGoTo: goTo || null,
    spinnerDelay: spinnerDelay,
    incomingView: navigationViewController.state.incomingView
  };

  var props = _objectSpread({}, rest, {
    after: after
  });

  return ___EmotionJSX(ConnectedItem, _extends({
    onClick: handleClick
  }, props, propsForAfterComp));
};

export { GoToItem as GoToItemBase };
export default withNavigationViewController(GoToItem);