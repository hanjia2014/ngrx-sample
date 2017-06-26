import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import heroListReducer, * as fromHeroList from './hero.list.reducer';
import heroReducer, * as fromHero from './hero.reducer';

export interface AppState {
    heroes: fromHeroList.HeroListState;
    hero: fromHero.HeroState;
};

export default compose(combineReducers)({
    heroList: heroListReducer,
    hero: heroReducer
});