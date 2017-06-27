import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Hero }        from '../../models/hero';
import { HeroService } from '../../services/hero.service';

import { AppState } from '../../reducers';
import { HeroActions } from '../../actions/hero.action';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { HeroForm } from './hero-form.component';

@Component({
  selector: 'hero-detail',
  template: `<rx-hero-form
                [hero]="hero | async"
                (back)="goBack()"
                (save)="save($event)"
            ></rx-hero-form>`
})
export class HeroDetailComponent implements OnInit {
    hero: Observable<any>;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private store: Store<AppState>,
        private heroActions: HeroActions,
        private location: Location
    ) { 
        this.hero = store.select('hero');
    }

    ngOnInit(): void {
        this.route.params
            .select<string>('id')
            .subscribe(id => {
                if (id) {
                    this.store.dispatch(this.heroActions.getHero(id));
                } else {
                    this.store.dispatch(this.heroActions.resetBlankHero());
                }
            });
    }

    save(): void {
        this.heroService.saveHero(this.hero).subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
