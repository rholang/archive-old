import { JsonLd } from '../../client/types';
import { AnyAction } from 'redux';
export declare type CardActionType = 'pending' | 'resolving' | 'resolved' | 'errored';
export declare type ServerErrors = 'InternalServerError' | 'ResolveBadRequestError' | 'ResolveUnsupportedError' | 'ResolveAuthError';
export interface CardAction<T = JsonLd> extends AnyAction {
    type: CardActionType;
    url: string;
    payload?: T;
}
export declare type CardActionParams = {
    url: string;
};
export declare type CardBaseActionCreator<T = JsonLd> = (type: CardActionType, params: CardActionParams, payload?: T) => CardAction<T>;
