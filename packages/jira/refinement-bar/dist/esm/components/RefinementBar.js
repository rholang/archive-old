import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/** @jsx jsx */
import { PureComponent, Children, // $FlowFixMe "there is no `forwardRef` export in `react`"
forwardRef, createRef } from 'react';
import memoize from 'memoize-one';
import applyRef from 'apply-ref';
import { jsx } from '@emotion/core';
import Badge from '@atlaskit/badge';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import { RefinementBarProvider, RefinementBarContext } from './ContextProvider';
import Popup, { DialogInner } from './Popup';
import { FilterButton } from './FilterButton';
import { FilterManager } from './FilterManager';
import { cloneObj, isEqualArr, objectMap, stringCompare } from '../utils';
import { createAndFire, defaultAttributes, withAnalyticsContext, withAnalyticsEvents } from '../analytics';

var ActualRefinementBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ActualRefinementBar, _PureComponent);

  function ActualRefinementBar(props, context) {
    var _this;

    _classCallCheck(this, ActualRefinementBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActualRefinementBar).call(this, props, context)); // declared here once so react-select can keep track of the keys;
    // helps with the focused option, scroll tracking etc.

    _defineProperty(_assertThisInitialized(_this), "filterOptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "showLessRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "showAllRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "analyticsTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "getActivePopup", function () {
      return _this.props.activePopupKey === undefined ? _this.state.activePopupKey : _this.props.activePopupKey;
    });

    _defineProperty(_assertThisInitialized(_this), "openPopup", function (key) {
      var onPopupOpen = _this.props.onPopupOpen;
      if (onPopupOpen) onPopupOpen(key);

      _this.setState({
        activePopupKey: key
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closePopup", function () {
      var onPopupClose = _this.props.onPopupClose;
      if (onPopupClose) onPopupClose();

      _this.setState({
        activePopupKey: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleIdleAnalyticsEvent", function (values) {
      clearTimeout(_this.analyticsTimer); // NOTE: Five seconds is arbitrary. Our assumption is that it's enough time
      // to ensure the user has "committed" to a search/filter.

      var idleDuration = 5000;
      var createAnalyticsEvent = _this.props.createAnalyticsEvent;
      _this.analyticsTimer = setTimeout(function () {
        // NOTE: we must avoid personally identifiable information, so the payload
        // SHOULD NOT contain any actual values.
        var filters = objectMap(values, function (val, key) {
          var field = _this.context.fieldConfig[key];
          var filterType = field.type.name; // Augment where possible with additional data related to the filter
          // type. For example, number may be greater than / less than etc.

          var additionalData = null;

          switch (filterType) {
            case 'Number':
            case 'Text':
              additionalData = {
                type: val.type
              };
              break;

            default:
          }

          return {
            filterType: filterType,
            additionalData: additionalData
          };
        });
        createAndFire({
          action: 'idle-submit',
          attributes: defaultAttributes,
          filters: filters
        })(createAnalyticsEvent);
      }, idleDuration);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFieldAdd",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(key) {
        var field, data, meta, values;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                field = _this.context.fieldConfig[key];
                data = field.getInitialValue();
                meta = {
                  action: 'add',
                  key: key,
                  data: data
                };
                _context.next = 5;
                return cloneObj(_this.state.values, {
                  add: _defineProperty({}, key, data)
                });

              case 5:
                values = _context.sent;

                _this.openPopup(key);

                _this.setState({
                  values: values,
                  isExpanded: true
                }, function () {
                  _this.context.onChange(values, meta);
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleFieldRemove",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(key, event) {
        var values;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                _context2.next = 3;
                return cloneObj(_this.state.values, {
                  remove: key
                });

              case 3:
                values = _context2.sent;

                _this.setState({
                  values: values
                }, function () {
                  _this.context.onChange(values, {
                    action: 'remove',
                    key: key
                  });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleFieldClear",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3(key) {
        var field, value, values;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                field = _this.context.fieldConfig[key];
                value = field.getInitialValue();
                values = cloneObj(_this.state.values, {
                  add: _defineProperty({}, key, value)
                });

                _this.setState({
                  values: values
                }, function () {
                  _this.handleIdleAnalyticsEvent(values);

                  _this.context.onChange(values, {
                    action: 'clear',
                    key: key
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleFieldChange", function (key) {
      return function (value) {
        var fieldConfig = _this.context.fieldConfig;
        var oldInvalid = _this.state.invalid;
        var values = cloneObj(_this.state.values, {
          add: _defineProperty({}, key, value)
        });
        var field = fieldConfig[key];
        var invalidMessage = field.validate(value);
        var invalid = oldInvalid;

        if (invalidMessage) {
          invalid = cloneObj(oldInvalid, {
            add: _defineProperty({}, key, invalidMessage)
          });
        } else if (oldInvalid[key]) {
          invalid = cloneObj(oldInvalid, {
            remove: key
          });
        }

        var liveUpdateStoredValues = function liveUpdateStoredValues() {
          // don't commit changes to context if there's invalid keys
          if (invalid[key]) {
            return;
          } // avoid unnecessary calls


          if (values[key] === _this.context.value[key]) {
            return;
          }

          var data = values[key];
          var meta = {
            action: 'update',
            key: key,
            data: data
          };

          _this.handleIdleAnalyticsEvent(values);

          _this.context.onChange(values, meta);
        };

        _this.setState({
          invalid: invalid,
          values: values
        }, liveUpdateStoredValues);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "makeField", function (config) {
      return function (key) {
        var fieldModel = _this.context.fieldConfig[key]; // Catch invalid configurations

        if (!fieldModel) {
          var likelySource = config.isRemovable ? 'value' : 'irremovableKeys';
          throw new Error("Couldn't find a matching field config for key \"".concat(key, "\". There may be stale or invalid keys in `").concat(likelySource, "`."));
        }

        var type = fieldModel.type,
            field = _objectWithoutProperties(fieldModel, ["type"]);

        var FieldView = type.view; // Catch missing views:
        // This should only really happen when developing a new field type

        if (!FieldView) {
          throw new Error("Couldn't find the View (".concat(type.name, ") for key \"").concat(key, "\"."));
        }

        var invalidMessage = _this.state.invalid[key];
        var isInvalid = Boolean(invalidMessage);
        var initialValue = field.getInitialValue();
        var storedValue = _this.context.value[key] || initialValue;
        var localValue = _this.state.values[key] || initialValue;
        var hasPopup = typeof field.formatLabel === 'function';
        var popupIsOpen = _this.getActivePopup() === key;

        var fieldUI = function fieldUI(renderContextProps) {
          var extra = _objectSpread({}, config, renderContextProps);

          return jsx(FieldView, _extends({
            closePopup: hasPopup ? _this.closePopup : undefined,
            field: field,
            invalidMessage: invalidMessage,
            key: key,
            onClear: function onClear() {
              return _this.handleFieldClear(key);
            },
            onChange: _this.handleFieldChange(key),
            refinementBarValue: _this.context.value,
            storedValue: storedValue,
            value: localValue
          }, extra));
        };

        return hasPopup ? jsx(Popup, {
          key: key,
          innerRef: function innerRef(val) {
            // This could be tidier by just applying to FilterButton's ref, but
            // there's a bug in the version of react-popper (1.0.2) we're using
            // that results in infite set state calls.
            applyRef(_this.props.refs[key], val);
          },
          isOpen: popupIsOpen,
          onOpen: function onOpen() {
            return _this.openPopup(key);
          },
          onClose: _this.closePopup,
          allowClose: !isInvalid,
          target: function target(_ref4) {
            var isOpen = _ref4.isOpen,
                onClick = _ref4.onClick,
                ref = _ref4.ref;
            return jsx(FilterButton, {
              field: field,
              isInvalid: isInvalid,
              isSelected: isOpen,
              onClick: onClick,
              onClear: stringCompare(storedValue, initialValue) ? null : function () {
                return _this.handleFieldClear(key);
              },
              ref: ref
            }, field.formatLabel(storedValue));
          }
        }, fieldUI) : fieldUI({
          innerRef: _this.props.refs[key]
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeFilter", function (options, meta) {
      _this.closePopup();

      switch (meta.action) {
        case 'clear-options':
          options.forEach(function (o) {
            return _this.handleFieldRemove(o.value);
          });
          break;

        case 'select-option':
          _this.handleFieldAdd(meta.option.value);

          break;

        case 'deselect-option':
          _this.handleFieldRemove(meta.option.value);

          break;

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getFilterValue", memoize(function (keys) {
      return keys.map(_this.mapKeyToOption);
    }));

    _defineProperty(_assertThisInitialized(_this), "showAll", function (isExpanded) {
      return function () {
        _this.setState({
          isExpanded: isExpanded
        }, function () {
          // NOTE: focus is managed manually here because the show/hide buttons are
          // removed from the DOM and the user should stay focused _somewhere_ in
          // the refinement bar
          var target = isExpanded ? _this.showLessRef.current : _this.showAllRef.current;

          if (target && typeof target.focus === 'function') {
            target.focus();
          }
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "mapKeyToOption", function (value) {
      var field = _this.context.fieldConfig[value];
      var label = field.label || value;
      return {
        label: label,
        value: value
      }; // react-select expects this shape
    });

    _defineProperty(_assertThisInitialized(_this), "shouldDisplayAddUI", function () {
      var _this$context = _this.context,
          fieldKeys = _this$context.fieldKeys,
          irremovableKeys = _this$context.irremovableKeys;
      return !isEqualArr(fieldKeys, irremovableKeys);
    });

    _this.filterOptions = context.removeableKeys.map(_this.mapKeyToOption);
    _this.state = {
      activePopupKey: null,
      invalid: {},
      isExpanded: true,
      values: context.value || {}
    };
    return _this;
  }

  _createClass(ActualRefinementBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$context2 = this.context,
          irremovableKeys = _this$context2.irremovableKeys,
          selectedKeys = _this$context2.selectedKeys;
      var isExpanded = this.state.isExpanded;
      var activePopupKey = this.getActivePopup();
      var FILTER_POPUP_KEY = '__refinement-bar-more-menu__';
      return jsx(Group, null, irremovableKeys.map(this.makeField({
        isRemovable: false
      })), isExpanded && selectedKeys.map(this.makeField({
        isRemovable: true
      })), !isExpanded && selectedKeys.length ? jsx(Button, {
        ref: this.showAllRef,
        onClick: this.showAll(true),
        iconAfter: jsx(Badge, {
          appearance: "primary"
        }, selectedKeys.length)
      }, "Show All") : null, this.shouldDisplayAddUI() ? jsx(Popup, {
        onOpen: function onOpen() {
          return _this2.openPopup(FILTER_POPUP_KEY);
        },
        onClose: this.closePopup,
        isOpen: activePopupKey === FILTER_POPUP_KEY,
        target: function target(_ref5) {
          var isOpen = _ref5.isOpen,
              onClick = _ref5.onClick,
              ref = _ref5.ref;
          return jsx(Button, {
            appearance: "link",
            iconBefore: jsx(AddIcon, null),
            ref: ref,
            isSelected: isOpen,
            onClick: onClick
          }, "More");
        }
      }, function (_ref6) {
        var scheduleUpdate = _ref6.scheduleUpdate;
        return jsx(DialogInner, {
          minWidth: 220
        }, jsx(FilterManager, {
          options: _this2.filterOptions,
          onChange: _this2.onChangeFilter,
          scheduleUpdate: scheduleUpdate,
          value: _this2.getFilterValue(selectedKeys)
        }));
      }) : null, isExpanded && selectedKeys.length ? jsx(Button, {
        ref: this.showLessRef,
        appearance: "subtle-link",
        onClick: this.showAll(false)
      }, "Show Less") : null);
    }
  }]);

  return ActualRefinementBar;
}(PureComponent); // ==============================
// Styled Components
// ==============================
// eslint-disable-next-line react/no-multi-comp


_defineProperty(ActualRefinementBar, "contextType", RefinementBarContext);

_defineProperty(ActualRefinementBar, "defaultProps", {
  refs: {}
});

var Group = forwardRef(function (_ref7, ref) {
  var children = _ref7.children;
  var gutter = 4;
  var childArray = Children.toArray(children).filter(Boolean); // filter out null and undefined children

  return jsx("div", {
    ref: ref,
    css: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -gutter
    }
  }, childArray.map(function (child, idx) {
    return jsx("div", {
      css: {
        margin: gutter,
        minWidth: 0
      },
      key: child.key || idx
    }, child);
  }));
}); // ==============================
// Wrap with analytics
// ==============================

export var RefinementBarUI = withAnalyticsContext(defaultAttributes)(withAnalyticsEvents()(ActualRefinementBar));

var RefinementBar = function RefinementBar(_ref8) {
  var activePopupKey = _ref8.activePopupKey,
      fieldConfig = _ref8.fieldConfig,
      irremovableKeys = _ref8.irremovableKeys,
      onChange = _ref8.onChange,
      onPopupClose = _ref8.onPopupClose,
      onPopupOpen = _ref8.onPopupOpen,
      refs = _ref8.refs,
      value = _ref8.value;
  return jsx(RefinementBarProvider, {
    fieldConfig: fieldConfig,
    irremovableKeys: irremovableKeys,
    onChange: onChange,
    value: value
  }, jsx(RefinementBarUI, {
    activePopupKey: activePopupKey,
    onPopupOpen: onPopupOpen,
    onPopupClose: onPopupClose,
    refs: refs
  }));
};

export default RefinementBar;