"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HeroActions = HeroActions_1 = class HeroActions {
    loadHeroes() {
        return {
            type: HeroActions_1.LOAD_HEROES
        };
    }
    loadHeroesSuccess(heroes) {
        return {
            type: HeroActions_1.LOAD_HEROES_SUCCESS,
            payload: heroes
        };
    }
    getHero(id) {
        return {
            type: HeroActions_1.GET_HERO,
            payload: id
        };
    }
    getHeroSuccess(hero) {
        return {
            type: HeroActions_1.GET_HERO_SUCCESS,
            payload: hero
        };
    }
    resetBlankHero() {
        return {
            type: HeroActions_1.RESET_BLANK_HERO
        };
    }
    saveHero(hero) {
        return {
            type: HeroActions_1.SAVE_HERO,
            payload: hero
        };
    }
    saveHeroSuccess(hero) {
        return {
            type: HeroActions_1.SAVE_HERO_SUCCESS,
            payload: hero
        };
    }
    addHero(hero) {
        return {
            type: HeroActions_1.ADD_HERO,
            payload: hero
        };
    }
    addHeroSuccess(hero) {
        return {
            type: HeroActions_1.ADD_HERO_SUCCESS,
            payload: hero
        };
    }
    deleteHero(hero) {
        return {
            type: HeroActions_1.DELETE_HERO,
            payload: hero
        };
    }
    deleteHeroSuccess(hero) {
        return {
            type: HeroActions_1.DELETE_HERO_SUCCESS,
            payload: hero
        };
    }
};
HeroActions.LOAD_HEROES = '[Hero] Load Heroes';
HeroActions.LOAD_HEROES_SUCCESS = '[Hero] Load Heroes Success';
HeroActions.GET_HERO = '[Hero] Get Hero';
HeroActions.GET_HERO_SUCCESS = '[Hero] Get Hero Success';
HeroActions.RESET_BLANK_HERO = '[Hero] Reset Blank Hero';
HeroActions.SAVE_HERO = '[Hero] Save Hero';
HeroActions.SAVE_HERO_SUCCESS = '[Hero] Save Hero Success';
HeroActions.ADD_HERO = '[Hero] Add Hero';
HeroActions.ADD_HERO_SUCCESS = '[Hero] Add Hero Success';
HeroActions.DELETE_HERO = '[Hero] Delete Hero';
HeroActions.DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success';
HeroActions = HeroActions_1 = __decorate([
    core_1.Injectable()
], HeroActions);
exports.HeroActions = HeroActions;
var HeroActions_1;
//# sourceMappingURL=hero.js.map