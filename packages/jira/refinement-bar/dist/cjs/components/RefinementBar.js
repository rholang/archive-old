"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RefinementBarUI = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _applyRef = _interopRequireDefault(require("apply-ref"));

var _core = require("@emotion/core");

var _badge = _interopRequireDefault(require("@atlaskit/badge"));

var _button = _interopRequireDefault(require("@atlaskit/button"));

var _add5 = _interopRequireDefault(require("@atlaskit/icon/glyph/add"));

var _ContextProvider = require("./ContextProvider");

var _Popup = _interopRequireWildcard(require("./Popup"));

var _FilterButton = require("./FilterButton");

var _FilterManager = require("./FilterManager");

var _utils = require("../utils");

var _analytics = require("../analytics");

/** @jsx jsx */
var ActualRefinementBar =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ActualRefinementBar, _PureComponent);

  function ActualRefinementBar(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ActualRefinementBar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ActualRefinementBar).call(this, props, context)); // declared here once so react-select can keep track of the keys;
    // helps with the focused option, scroll tracking etc.

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "filterOptions", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showLessRef", (0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showAllRef", (0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "analyticsTimer", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getActivePopup", function () {
      return _this.props.activePopupKey === undefined ? _this.state.activePopupKey : _this.props.activePopupKey;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openPopup", function (key) {
      var onPopupOpen = _this.props.onPopupOpen;
      if (onPopupOpen) onPopupOpen(key);

      _this.setState({
        activePopupKey: key
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closePopup", function () {
      var onPopupClose = _this.props.onPopupClose;
      if (onPopupClose) onPopupClose();

      _this.setState({
        activePopupKey: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleIdleAnalyticsEvent", function (values) {
      clearTimeout(_this.analyticsTimer); // NOTE: Five seconds is arbitrary. Our assumption is that it's enough time
      // to ensure the user has "committed" to a search/filter.

      var idleDuration = 5000;
      var createAnalyticsEvent = _this.props.createAnalyticsEvent;
      _this.analyticsTimer = setTimeout(function () {
        // NOTE: we must avoid personally identifiable information, so the payload
        // SHOULD NOT contain any actual values.
        var filters = (0, _utils.objectMap)(values, function (val, key) {
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
        (0, _analytics.createAndFire)({
          action: 'idle-submit',
          attributes: _analytics.defaultAttributes,
          filters: filters
        })(createAnalyticsEvent);
      }, idleDuration);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFieldAdd",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(key) {
        var field, data, meta, values;
        return _regenerator.default.wrap(function _callee$(_context) {
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
                return (0, _utils.cloneObj)(_this.state.values, {
                  add: (0, _defineProperty2.default)({}, key, data)
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFieldRemove",
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(key, event) {
        var values;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                _context2.next = 3;
                return (0, _utils.cloneObj)(_this.state.values, {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFieldClear",
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(key) {
        var field, value, values;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                field = _this.context.fieldConfig[key];
                value = field.getInitialValue();
                values = (0, _utils.cloneObj)(_this.state.values, {
                  add: (0, _defineProperty2.default)({}, key, value)
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFieldChange", function (key) {
      return function (value) {
        var fieldConfig = _this.context.fieldConfig;
        var oldInvalid = _this.state.invalid;
        var values = (0, _utils.cloneObj)(_this.state.values, {
          add: (0, _defineProperty2.default)({}, key, value)
        });
        var field = fieldConfig[key];
        var invalidMessage = field.validate(value);
        var invalid = oldInvalid;

        if (invalidMessage) {
          invalid = (0, _utils.cloneObj)(oldInvalid, {
            add: (0, _defineProperty2.default)({}, key, invalidMessage)
          });
        } else if (oldInvalid[key]) {
          invalid = (0, _utils.cloneObj)(oldInvalid, {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "makeField", function (config) {
      return function (key) {
        var fieldModel = _this.context.fieldConfig[key]; // Catch invalid configurations

        if (!fieldModel) {
          var likelySource = config.isRemovable ? 'value' : 'irremovableKeys';
          throw new Error("Couldn't find a matching field config for key \"".concat(key, "\". There may be stale or invalid keys in `").concat(likelySource, "`."));
        }

        var type = fieldModel.type,
            field = (0, _objectWithoutProperties2.default)(fieldModel, ["type"]);
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
          var extra = (0, _objectSpread2.default)({}, config, renderContextProps);
          return (0, _core.jsx)(FieldView, (0, _extends2.default)({
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

        return hasPopup ? (0, _core.jsx)(_Popup.default, {
          key: key,
          innerRef: function innerRef(val) {
            // This could be tidier by just applying to FilterButton's ref, but
            // there's a bug in the version of react-popper (1.0.2) we're using
            // that results in infite set state calls.
            (0, _applyRef.default)(_this.props.refs[key], val);
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
            return (0, _core.jsx)(_FilterButton.FilterButton, {
              field: field,
              isInvalid: isInvalid,
              isSelected: isOpen,
              onClick: onClick,
              onClear: (0, _utils.stringCompare)(storedValue, initialValue) ? null : function () {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeFilter", function (options, meta) {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getFilterValue", (0, _memoizeOne.default)(function (keys) {
      return keys.map(_this.mapKeyToOption);
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showAll", function (isExpanded) {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mapKeyToOption", function (value) {
      var field = _this.context.fieldConfig[value];
      var label = field.label || value;
      return {
        label: label,
        value: value
      }; // react-select expects this shape
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shouldDisplayAddUI", function () {
      var _this$context = _this.context,
          fieldKeys = _this$context.fieldKeys,
          irremovableKeys = _this$context.irremovableKeys;
      return !(0, _utils.isEqualArr)(fieldKeys, irremovableKeys);
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

  (0, _createClass2.default)(ActualRefinementBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$context2 = this.context,
          irremovableKeys = _this$context2.irremovableKeys,
          selectedKeys = _this$context2.selectedKeys;
      var isExpanded = this.state.isExpanded;
      var activePopupKey = this.getActivePopup();
      var FILTER_POPUP_KEY = '__refinement-bar-more-menu__';
      return (0, _core.jsx)(Group, null, irremovableKeys.map(this.makeField({
        isRemovable: false
      })), isExpanded && selectedKeys.map(this.makeField({
        isRemovable: true
      })), !isExpanded && selectedKeys.length ? (0, _core.jsx)(_button.default, {
        ref: this.showAllRef,
        onClick: this.showAll(true),
        iconAfter: (0, _core.jsx)(_badge.default, {
          appearance: "primary"
        }, selectedKeys.length)
      }, "Show All") : null, this.shouldDisplayAddUI() ? (0, _core.jsx)(_Popup.default, {
        onOpen: function onOpen() {
          return _this2.openPopup(FILTER_POPUP_KEY);
        },
        onClose: this.closePopup,
        isOpen: activePopupKey === FILTER_POPUP_KEY,
        target: function target(_ref5) {
          var isOpen = _ref5.isOpen,
              onClick = _ref5.onClick,
              ref = _ref5.ref;
          return (0, _core.jsx)(_button.default, {
            appearance: "link",
            iconBefore: (0, _core.jsx)(_add5.default, null),
            ref: ref,
            isSelected: isOpen,
            onClick: onClick
          }, "More");
        }
      }, function (_ref6) {
        var scheduleUpdate = _ref6.scheduleUpdate;
        return (0, _core.jsx)(_Popup.DialogInner, {
          minWidth: 220
        }, (0, _core.jsx)(_FilterManager.FilterManager, {
          options: _this2.filterOptions,
          onChange: _this2.onChangeFilter,
          scheduleUpdate: scheduleUpdate,
          value: _this2.getFilterValue(selectedKeys)
        }));
      }) : null, isExpanded && selectedKeys.length ? (0, _core.jsx)(_button.default, {
        ref: this.showLessRef,
        appearance: "subtle-link",
        onClick: this.showAll(false)
      }, "Show Less") : null);
    }
  }]);
  return ActualRefinementBar;
}(_react.PureComponent); // ==============================
// Styled Components
// ==============================
// eslint-disable-next-line react/no-multi-comp


(0, _defineProperty2.default)(ActualRefinementBar, "contextType", _ContextProvider.RefinementBarContext);
(0, _defineProperty2.default)(ActualRefinementBar, "defaultProps", {
  refs: {}
});
var Group = (0, _react.forwardRef)(function (_ref7, ref) {
  var children = _ref7.children;
  var gutter = 4;

  var childArray = _react.Children.toArray(children).filter(Boolean); // filter out null and undefined children


  return (0, _core.jsx)("div", {
    ref: ref,
    css: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -gutter
    }
  }, childArray.map(function (child, idx) {
    return (0, _core.jsx)("div", {
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

var RefinementBarUI = (0, _analytics.withAnalyticsContext)(_analytics.defaultAttributes)((0, _analytics.withAnalyticsEvents)()(ActualRefinementBar));
exports.RefinementBarUI = RefinementBarUI;

var RefinementBar = function RefinementBar(_ref8) {
  var activePopupKey = _ref8.activePopupKey,
      fieldConfig = _ref8.fieldConfig,
      irremovableKeys = _ref8.irremovableKeys,
      onChange = _ref8.onChange,
      onPopupClose = _ref8.onPopupClose,
      onPopupOpen = _ref8.onPopupOpen,
      refs = _ref8.refs,
      value = _ref8.value;
  return (0, _core.jsx)(_ContextProvider.RefinementBarProvider, {
    fieldConfig: fieldConfig,
    irremovableKeys: irremovableKeys,
    onChange: onChange,
    value: value
  }, (0, _core.jsx)(RefinementBarUI, {
    activePopupKey: activePopupKey,
    onPopupOpen: onPopupOpen,
    onPopupClose: onPopupClose,
    refs: refs
  }));
};

var _default = RefinementBar;
exports.default = _default;