import { __assign, __extends } from "tslib";
/* eslint-disable max-len */
import React, { Component } from 'react';
import { DefaultProps } from '../constants';
import Wrapper from '../Wrapper';
var svg = "<canvas height=\"32\" width=\"61\" aria-hidden=\"true\"></canvas>\n<svg viewBox=\"0 0 61 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n    <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\" fill=\"inherit\">\n        <path d=\"M53.9206534,10.7552632 C57.9147241,10.7552632 60.2052632,13.6024684 60.2052632,17.5214578 C60.2052632,21.4404472 57.8874918,24.35 53.9206534,24.35 C49.9538149,24.35 47.5815789,21.4404472 47.5815789,17.5214578 C47.5815789,13.6024684 49.9265826,10.7552632 53.9206534,10.7552632 Z M27.4487792,10.7552632 C31.4189365,10.7552632 33.0157895,13.5490276 33.0157895,17.5214578 L33.0157895,18.551677 L23.604612,18.551677 C23.9151926,20.7724377 25.3333152,22.2094005 28.3746609,22.2094005 C29.7122165,22.2085348 31.0392035,21.9693579 32.2950081,21.5027948 L32.2950081,23.5810468 C31.2372762,24.1421748 29.6140532,24.35 28.2984807,24.35 C23.4786218,24.35 21.3631579,21.5295152 21.3631579,17.5214578 C21.3631579,13.575748 23.5284319,10.7552632 27.4487792,10.7552632 Z M20.3921053,10.7706355 L20.3921053,13.0201648 C17.5275634,12.715763 15.7816133,13.6107043 15.7816133,16.4477291 L15.7816133,24.35 L13.5947368,24.35 L13.5947368,10.9563206 L15.7816133,10.9563206 L15.7816133,13.3154346 C16.5362189,11.7355892 17.8382833,10.6093025 20.3921053,10.7706355 Z M12.6236842,7.84210526 L12.6236842,10.0037514 L7.46634071,10.0037514 L7.46634071,24.35 L5.1573435,24.35 L5.1573435,10.0037514 L0,10.0037514 L0,7.84210526 L12.6236842,7.84210526 Z M45.0669132,5.9 L45.0669132,20.6946317 C45.0669132,21.8723138 45.8875211,22.2756699 46.8977391,22.2756699 C47.1260371,22.2795467 47.3543781,22.2706988 47.5815789,22.2491721 L47.5815789,24.2453433 C47.1903464,24.3235577 46.7907953,24.3581419 46.3910759,24.3483905 C44.1468377,24.3483905 42.7263158,23.3385281 42.7263158,20.9537218 L42.7263158,5.9 L45.0669132,5.9 Z M37.3049153,5.9 L37.3049153,20.6943155 C37.3049153,21.8719724 38.1234271,22.2753199 39.1310647,22.2753199 C39.3587802,22.2792513 39.5865415,22.2704034 39.8131579,22.2488227 L39.8131579,24.2449512 C39.4189345,24.3244417 39.0161394,24.359034 38.613294,24.3479962 C36.3778887,24.3479962 34.9578947,23.3381553 34.9578947,20.9534 L34.9578947,5.9 L37.3049153,5.9 Z M53.9206534,12.8453909 C51.0854683,12.8453909 49.8206792,15.0364622 49.8206792,17.5214578 C49.8206792,20.0034844 51.0703392,22.2479966 53.9206534,22.2479966 C56.7709675,22.2479966 57.9661629,20.0034844 57.9661629,17.5214578 C57.9661629,15.0394312 56.7558384,12.8453909 53.9206534,12.8453909 Z M27.343299,12.8157015 C24.9992946,12.8038258 23.8126424,14.3447012 23.581172,16.6189027 L23.581172,16.6307784 L30.7743353,16.6307784 C30.6454151,14.1992236 29.5613131,12.8157015 27.343299,12.8157015 Z\" fill=\"inherit\" fill-rule=\"nonzero\"></path>\n    </g>\n</svg>";
var TrelloWordmark = /** @class */ (function (_super) {
    __extends(TrelloWordmark, _super);
    function TrelloWordmark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrelloWordmark.prototype.render = function () {
        return React.createElement(Wrapper, __assign({}, this.props, { svg: svg }));
    };
    TrelloWordmark.defaultProps = DefaultProps;
    return TrelloWordmark;
}(Component));
export default TrelloWordmark;
//# sourceMappingURL=Wordmark.js.map