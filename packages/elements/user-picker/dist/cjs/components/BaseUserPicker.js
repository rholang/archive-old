"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var analytics_1 = require("../analytics");
var batch_1 = require("./batch");
var i18n_1 = require("./i18n");
var utils_1 = require("./utils");
var loadingMessage = function () { return null; };
var UserPickerInternal = /** @class */ (function (_super) {
    tslib_1.__extends(UserPickerInternal, _super);
    function UserPickerInternal(props) {
        var _this = _super.call(this, props) || this;
        _this.getSessionId = function () {
            return _this.session && _this.session.id ? _this.session.id : undefined;
        };
        _this.withSelectRef = function (callback) { return function () {
            if (_this.selectRef) {
                callback(_this.selectRef.select.select);
            }
        }; };
        _this.nextOption = _this.withSelectRef(function (select) { return select.focusOption('down'); });
        _this.previousOption = _this.withSelectRef(function (select) {
            return select.focusOption('up');
        });
        _this.focus = function () {
            if (_this.selectRef && _this.selectRef.focus) {
                _this.selectRef.focus();
            }
        };
        _this.blur = function () {
            if (_this.selectRef && _this.selectRef.blur) {
                _this.selectRef.blur();
            }
        };
        _this.selectOption = _this.withSelectRef(function (select) {
            var focusedOption = select.state.focusedOption;
            select.selectOption(focusedOption);
        });
        _this.handleChange = function (value, _a) {
            var action = _a.action, removedValue = _a.removedValue, option = _a.option;
            if (removedValue && removedValue.data.fixed) {
                return;
            }
            _this.resetInputState();
            var _b = _this.props, onChange = _b.onChange, onSelection = _b.onSelection, onClear = _b.onClear, isMulti = _b.isMulti;
            utils_1.callCallback(onChange, utils_1.extractOptionValue(value), action);
            switch (action) {
                case 'select-option':
                    if (value && !Array.isArray(value)) {
                        utils_1.callCallback(onSelection, value.data, _this.getSessionId());
                    }
                    _this.fireEvent(analytics_1.selectEvent, isMulti ? option : value);
                    _this.session = isMulti ? analytics_1.startSession() : undefined;
                    break;
                case 'clear':
                    utils_1.callCallback(onClear);
                    _this.fireEvent(analytics_1.clearEvent);
                    break;
                case 'remove-value':
                case 'pop-value':
                    if (removedValue) {
                        _this.fireEvent(analytics_1.deleteEvent, removedValue.data);
                    }
                    break;
            }
            if (!_this.props.value) {
                _this.setState({ value: value });
            }
        };
        _this.handleSelectRef = function (ref) {
            _this.selectRef = ref;
        };
        _this.addOptions = batch_1.batchByKey(function (request, newOptions) {
            var resolving = _this.state.resolving;
            _this.setState(function (_a) {
                var inflightRequest = _a.inflightRequest, options = _a.options, count = _a.count;
                if (inflightRequest.toString() === request) {
                    return {
                        options: (resolving ? options : []).concat(newOptions.reduce(function (nextOptions, item) {
                            return Array.isArray(item)
                                ? nextOptions.concat(item[0])
                                : nextOptions.concat(item);
                        }, [])),
                        count: count - newOptions.length,
                        resolving: count - newOptions.length !== 0,
                    };
                }
                return null;
            });
        });
        _this.handleLoadOptionsError = function () {
            var count = _this.state.count;
            var newCount = count - 1;
            _this.setState({
                count: newCount,
                resolving: newCount !== 0,
            });
            _this.fireEvent(analytics_1.failedEvent);
        };
        _this.debouncedLoadOptions = lodash_debounce_1.default(function (search) {
            var loadOptions = _this.props.loadOptions;
            if (loadOptions) {
                _this.setState(function (_a) {
                    var e_1, _b;
                    var previousRequest = _a.inflightRequest;
                    var inflightRequest = previousRequest + 1;
                    var result = _this.session && _this.session.id
                        ? loadOptions(search, _this.session.id)
                        : loadOptions(search);
                    var addOptions = _this.addOptions.bind(_this, inflightRequest.toString());
                    var count = 0;
                    if (utils_1.isIterable(result)) {
                        try {
                            for (var result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                                var value = result_1_1.value;
                                Promise.resolve(value)
                                    .then(addOptions)
                                    .catch(_this.handleLoadOptionsError);
                                count++;
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (result_1_1 && !result_1_1.done && (_b = result_1.return)) _b.call(result_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                    else {
                        Promise.resolve(result)
                            .then(addOptions)
                            .catch(_this.handleLoadOptionsError);
                        count++;
                    }
                    return {
                        inflightRequest: inflightRequest,
                        count: count,
                        resolving: count !== 0,
                        options: [],
                    };
                });
            }
        }, 200);
        _this.executeLoadOptions = function (search) {
            var loadOptions = _this.props.loadOptions;
            if (loadOptions) {
                _this.setState({ resolving: true }, function () {
                    return _this.debouncedLoadOptions(search);
                });
            }
        };
        _this.handleFocus = function (event) {
            var _a = _this.state, value = _a.value, menuIsOpen = _a.menuIsOpen;
            if (!menuIsOpen || !_this.session) {
                _this.startSession();
            }
            utils_1.callCallback(_this.props.onFocus, _this.getSessionId());
            _this.setState({ menuIsOpen: true });
            if (!_this.props.isMulti && utils_1.isSingleValue(value)) {
                var input_1 = event.target;
                _this.setState({ inputValue: value.label }, function () {
                    if (input_1 instanceof HTMLInputElement) {
                        input_1.select();
                    }
                });
            }
        };
        _this.resetInputState = function () {
            // Prevent filter if query typed, then blurred with no selection
            _this.setState({
                inputValue: '',
            });
            utils_1.callCallback(_this.props.onInputChange, '', _this.getSessionId());
        };
        _this.handleBlur = function () {
            utils_1.callCallback(_this.props.onBlur, _this.getSessionId());
            if (utils_1.isPopupUserPickerByComponent(_this.props.SelectComponent)) {
                return;
            }
            _this.resetInputState();
            _this.setState({
                menuIsOpen: false,
                options: [],
            });
        };
        _this.handleClose = function () {
            _this.resetInputState();
            utils_1.callCallback(_this.props.onClose, _this.getSessionId());
            _this.setState({
                menuIsOpen: false,
                options: [],
            });
        };
        _this.handleInputChange = function (search, _a) {
            var action = _a.action;
            if (action === 'input-change' || action === 'set-value') {
                utils_1.callCallback(_this.props.onInputChange, search, _this.getSessionId());
                _this.setState({ inputValue: search });
                _this.executeLoadOptions(search);
            }
        };
        _this.fireEvent = function (eventCreator) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                analytics_1.createAndFireEventInElementsChannel(eventCreator.apply(void 0, tslib_1.__spread([_this.props, _this.state, _this.session], args)))(createAnalyticsEvent);
            }
        };
        _this.startSession = function () {
            _this.session = analytics_1.startSession();
            _this.fireEvent(analytics_1.focusEvent);
        };
        _this.handleKeyDown = function (event) {
            // Escape
            if (event.keyCode === 27) {
                _this.blur();
            }
            // Space
            if (event.keyCode === 32 && !_this.state.inputValue) {
                event.preventDefault();
                _this.setState({ inputValue: ' ' });
            }
            if (_this.session) {
                _this.session.lastKey = event.keyCode;
                switch (event.keyCode) {
                    // KeyUp 38
                    case 38:
                        _this.session.upCount++;
                        break;
                    // KeyDown 40
                    case 40:
                        _this.session.downCount++;
                        break;
                }
            }
        };
        _this.handleClearIndicatorHover = function (hoveringClearIndicator) {
            _this.setState({ hoveringClearIndicator: hoveringClearIndicator });
        };
        _this.getOptions = function () {
            var options = utils_1.getOptions(_this.state.options) || [];
            var _a = _this.props, maxOptions = _a.maxOptions, isMulti = _a.isMulti;
            if (maxOptions === 0) {
                return [];
            }
            if (maxOptions && maxOptions > 0 && maxOptions < options.length) {
                var value = _this.state.value;
                var filteredOptions = options;
                // Filter out previously selected options
                if (isMulti && Array.isArray(value)) {
                    var valueIds_1 = value.map(function (item) { return item.data.id; });
                    filteredOptions = options.filter(function (option) { return valueIds_1.indexOf(option.data.id) === -1; });
                }
                return filteredOptions.slice(0, maxOptions);
            }
            return options;
        };
        _this.getAppearance = function () {
            return _this.props.appearance
                ? _this.props.appearance
                : _this.props.isMulti
                    ? 'compact'
                    : 'normal';
        };
        _this.state = {
            options: [],
            inflightRequest: 0,
            count: 0,
            hoveringClearIndicator: false,
            menuIsOpen: !!_this.props.open,
            inputValue: props.search || '',
            resolving: false,
        };
        return _this;
    }
    UserPickerInternal.getDerivedStateFromProps = function (nextProps, prevState) {
        var derivedState = {};
        if (nextProps.open !== undefined) {
            derivedState.menuIsOpen = nextProps.open;
        }
        if (nextProps.value !== undefined) {
            derivedState.value = utils_1.optionToSelectableOptions(nextProps.value);
        }
        else if (nextProps.defaultValue && !prevState.value) {
            derivedState.value = utils_1.optionToSelectableOptions(nextProps.defaultValue);
        }
        if (nextProps.search !== undefined &&
            nextProps.search !== prevState.inputValue) {
            derivedState.inputValue = nextProps.search;
        }
        if (nextProps.options !== undefined) {
            derivedState.options = nextProps.options;
        }
        return derivedState;
    };
    UserPickerInternal.prototype.componentDidMount = function () {
        var _a = this.props, open = _a.open, search = _a.search;
        // load options when the picker open
        if (open) {
            if (!this.session) {
                this.startSession();
            }
            this.executeLoadOptions(search);
        }
    };
    UserPickerInternal.prototype.componentDidUpdate = function (_, prevState) {
        var _a = this.state, menuIsOpen = _a.menuIsOpen, options = _a.options;
        // load options when the picker open
        if (menuIsOpen && !prevState.menuIsOpen) {
            if (!this.session) {
                // session should have been created onFocus
                this.startSession();
            }
            this.executeLoadOptions();
        }
        if (!menuIsOpen && prevState.menuIsOpen && this.session) {
            this.fireEvent(analytics_1.cancelEvent, prevState);
            this.session = undefined;
        }
        if (menuIsOpen &&
            ((!prevState.menuIsOpen && options.length > 0) ||
                options.length !== prevState.options.length)) {
            this.fireEvent(analytics_1.searchedEvent);
        }
        if (this.state.inputValue !== prevState.inputValue) {
            if (this.session) {
                this.session.inputChangeTime = Date.now();
            }
        }
    };
    UserPickerInternal.prototype.render = function () {
        var _a = this.props, isMulti = _a.isMulti, isLoading = _a.isLoading, subtle = _a.subtle, placeholder = _a.placeholder, isClearable = _a.isClearable, isDisabled = _a.isDisabled, clearValueLabel = _a.clearValueLabel, menuMinWidth = _a.menuMinWidth, menuPortalTarget = _a.menuPortalTarget, addMoreMessage = _a.addMoreMessage, noOptionsMessage = _a.noOptionsMessage, disableInput = _a.disableInput, components = _a.components, pickerProps = _a.pickerProps, SelectComponent = _a.SelectComponent, styles = _a.styles, autoFocus = _a.autoFocus, fieldId = _a.fieldId, inputId = _a.inputId;
        var _b = this.state, count = _b.count, hoveringClearIndicator = _b.hoveringClearIndicator, menuIsOpen = _b.menuIsOpen, value = _b.value, inputValue = _b.inputValue, resolving = _b.resolving;
        var appearance = this.getAppearance();
        return (React.createElement(SelectComponent, tslib_1.__assign({ enableAnimation: false, value: value, autoFocus: autoFocus !== undefined ? autoFocus : menuIsOpen, ref: this.handleSelectRef, isMulti: isMulti, options: this.getOptions(), styles: styles, components: components, inputValue: inputValue, menuIsOpen: menuIsOpen, isLoading: count > 0 || resolving || isLoading, loadingMessage: loadingMessage, menuPlacement: "auto", placeholder: placeholder || React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.placeholder)), addMoreMessage: addMoreMessage, classNamePrefix: "fabric-user-picker", hoveringClearIndicator: hoveringClearIndicator, appearance: appearance, isClearable: isClearable, subtle: isMulti ? false : subtle, blurInputOnSelect: !isMulti, closeMenuOnSelect: !isMulti, noOptionsMessage: noOptionsMessage, openMenuOnFocus: true, isDisabled: isDisabled, isFocused: menuIsOpen, backspaceRemovesValue: isMulti, filterOption: null, clearValueLabel: clearValueLabel, menuMinWidth: menuMinWidth, menuPortalTarget: menuPortalTarget, disableInput: disableInput || isDisabled, instanceId: fieldId, inputId: inputId, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onClose: this.handleClose, onInputChange: this.handleInputChange, onClearIndicatorHover: this.handleClearIndicatorHover, onKeyDown: this.handleKeyDown }, pickerProps)));
    };
    UserPickerInternal.defaultProps = {
        isMulti: false,
        subtle: false,
        isClearable: true,
    };
    return UserPickerInternal;
}(React.Component));
exports.BaseUserPicker = analytics_next_1.withAnalyticsEvents()(UserPickerInternal);
//# sourceMappingURL=BaseUserPicker.js.map