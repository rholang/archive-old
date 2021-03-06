import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component, createRef } from 'react';
import { DropdownMenuStateless } from '@atlaskit/dropdown-menu';
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { GlobalItem } from '@atlaskit/navigation-next';

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenChange", function (_ref) {
      var isOpen = _ref.isOpen;
      return _this.setState({
        isOpen: isOpen
      });
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          Trigger = _this$props.trigger;
      var isOpen = this.state.isOpen;
      return ___EmotionJSX(DropdownMenuStateless, {
        appearance: "tall",
        boundariesElement: "window",
        isOpen: isOpen,
        onOpenChange: this.handleOpenChange,
        position: "right bottom",
        trigger: ___EmotionJSX(Trigger, {
          isOpen: isOpen
        })
      }, items);
    }
  }]);

  return DropdownItem;
}(Component);

var ItemComponent = function ItemComponent(props) {
  var DropdownItems = props.dropdownItems,
      CustomItemComponent = props.itemComponent,
      badgeCount = props.badgeCount,
      itemProps = _objectWithoutProperties(props, ["dropdownItems", "itemComponent", "badgeCount"]);

  if (CustomItemComponent) {
    return ___EmotionJSX(CustomItemComponent, itemProps);
  }

  if (DropdownItems) {
    return ___EmotionJSX(DropdownItem, {
      trigger: function trigger(_ref2) {
        var isOpen = _ref2.isOpen;
        return ___EmotionJSX(GlobalItem, _extends({
          isSelected: isOpen
        }, itemProps));
      },
      items: ___EmotionJSX(DropdownItems, null)
    });
  }

  if (badgeCount !== undefined) {
    return ___EmotionJSX(NavigationAnalyticsContext, {
      data: {
        attributes: {
          badgeCount: badgeCount
        }
      }
    }, ___EmotionJSX(GlobalItem, itemProps));
  }

  return ___EmotionJSX(GlobalItem, itemProps);
};

// eslint-disable-next-line react/no-multi-comp
var ItemComponentWithRef =
/*#__PURE__*/
function (_Component2) {
  _inherits(ItemComponentWithRef, _Component2);

  function ItemComponentWithRef() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, ItemComponentWithRef);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ItemComponentWithRef)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "node", createRef());

    return _this2;
  }

  _createClass(ItemComponentWithRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.publishRef();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.publishRef();
    }
  }, {
    key: "publishRef",
    value: function publishRef() {
      var getRef = this.props.getRef;

      if (typeof getRef === 'function') {
        getRef(this.node);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          ref = _this$props2.ref,
          itemProps = _objectWithoutProperties(_this$props2, ["ref"]);

      return ___EmotionJSX("span", {
        ref: this.node
      }, ___EmotionJSX(ItemComponent, itemProps));
    }
  }]);

  return ItemComponentWithRef;
}(Component);

export { ItemComponentWithRef as default };