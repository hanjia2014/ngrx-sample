import { Action } from '@ngrx/store';
import { Hero } from '../models';
import { HeroActions } from '../actions/hero.action';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

export type HeroListState = Hero[];
const initialState: HeroListState = [];

export default function (state = initialState, action: Action): HeroListState {
    switch (action.type) {
        case HeroActions.LOAD_HEROES_SUCCESS: {
            return action.payload;
        }
        case HeroActions.ADD_HERO_SUCCESS: {
            let index = 0;
            for (var i = 0; i < state.length; i++) {
                var item = state[i];
                if (item.id == action.payload.id) {
                    index = i;
                }
            }
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    action.payload,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        case HeroActions.DELETE_HERO_SUCCESS: {
            return state.filter(hero => {
                return hero.id !== action.payload.id;
            });
        }
        default: {
            return state;
        }
    }
}