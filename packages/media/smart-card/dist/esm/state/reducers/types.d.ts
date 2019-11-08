import { CardAction, CardActionType } from '../actions/types';
import { Reducer } from 'react';
export declare type CardReducerMap<StateType, ActionType> = Record<CardActionType, CardReducer<StateType, ActionType>>;
export declare type CardReducer<StateType, ActionType> = Reducer<StateType, CardAction<ActionType>>;
