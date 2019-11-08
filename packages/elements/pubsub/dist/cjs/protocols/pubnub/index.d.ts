import { OnEvent } from '../../apiTypes';
import { Protocol, EventType } from '../../types';
import { ConnectionState, PubNubProtocolConfig } from '../types';
import { FeatureFlags } from '../../featureFlags';
export default class PubNubProtocol implements Protocol {
    private pubNubClient?;
    private historyFetcher?;
    private eventEmitter;
    private lastTimeToken?;
    private lastTimeTokenBeforeNetworkDisconnection?;
    private config;
    private connectionState;
    private featureFlags;
    constructor(featureFlags: FeatureFlags);
    getType(): string;
    getCapabilities(): string[];
    subscribe(config: PubNubProtocolConfig): void;
    unsubscribeAll(): void;
    on(event: EventType, handler: OnEvent): void;
    off(event: EventType, handler: OnEvent): void;
    networkUp(): void;
    networkDown(): void;
    getLastTimeToken(): string | undefined;
    getConnectionState(): ConnectionState;
    private updateClientConfig;
    private initializeClient;
    private onMessageEvent;
    private onStatusEvent;
    private onConnected;
    private onNetworkDown;
    private onAccessDenied;
    private onReconnect;
    private onMessageCountExceeded;
}
