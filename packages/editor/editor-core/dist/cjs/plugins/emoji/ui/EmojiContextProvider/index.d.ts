import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare class EmojiContextProvider extends React.Component<any, any> {
    static childContextTypes: {
        emoji: PropTypes.Requireable<any>;
    };
    getChildContext(): {
        emoji: {
            emojiProvider: any;
        };
    };
    render(): React.ReactNode;
}
