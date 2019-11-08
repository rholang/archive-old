import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { N60A } from '@atlaskit/theme/colors';
import { Draggable } from 'react-beautiful-dnd';
import Item from '../../presentational/Item';

var getStyles = function getStyles(provided, _ref) {
  var isDragging = _ref.isDragging;
  return _objectSpread({}, provided, {
    itemBase: _objectSpread({}, provided.itemBase, {
      boxShadow: isDragging ? "".concat(N60A, " 0px 4px 8px -2px, ").concat(N60A, " 0px 0px 1px") : undefined,
      cursor: isDragging ? 'grabbing' : 'pointer'
    })
  });
};

var SortableItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SortableItem, _Component);

  function SortableItem() {
    _classCallCheck(this, SortableItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SortableItem).apply(this, arguments));
  }

  _createClass(SortableItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          itemProps = _objectWithoutProperties(_this$props, ["index"]);

      return ___EmotionJSX(Draggable, {
        draggableId: itemProps.id,
        index: index,
        disableInteractiveElementBlocking: true
      }, function (draggableProvided, draggableSnapshot) {
        var draggableProps = _objectSpread({}, draggableProvided.draggableProps, draggableProvided.dragHandleProps); // disable onClick if the intention was drag


        var onClick = draggableSnapshot.isDragging ? undefined : itemProps.onClick;
        return ___EmotionJSX(Item, _extends({
          draggableProps: draggableProps,
          innerRef: draggableProvided.innerRef,
          isDragging: draggableSnapshot.isDragging,
          styles: getStyles
        }, itemProps, {
          onClick: onClick
        }));
      });
    }
  }]);

  return SortableItem;
}(Component);

export { SortableItem as default };