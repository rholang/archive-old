import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import FieldController from '../Controller';

var SearchController =
/*#__PURE__*/
function (_FieldController) {
  _inherits(SearchController, _FieldController);

  function SearchController() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getInitialValue", function () {
      return '';
    });

    return _this;
  }

  return SearchController;
}(FieldController);

export { SearchController as default };