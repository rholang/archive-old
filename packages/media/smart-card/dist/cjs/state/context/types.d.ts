/// <reference types="react" />
import { CardStore, CardConnections } from '../store/types';
import CardClient from '../../client';
import { Store } from 'redux';
export interface CardAuthFlowOpts {
    authFlow?: 'oauth2' | 'disabled';
}
export interface CardContext {
    store: Store<CardStore>;
    connections: CardConnections;
    config: CardProviderCacheOpts & CardAuthFlowOpts;
}
export interface CardProviderCacheOpts {
    maxAge: number;
    maxLoadingDelay: number;
}
export interface CardProviderStoreOpts {
    initialState: CardStore;
}
export declare type CardProviderProps = {
    client?: CardClient;
    cacheOptions?: CardProviderCacheOpts;
    storeOptions?: CardProviderStoreOpts;
    children: React.ReactNode;
} & CardAuthFlowOpts;
