import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { Store, StoreModule }   from '@ngrx/store';
import { AppRoutingModule }     from './app-routing.module';
import { EffectsModule }        from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroes/hero-detail.component';
import { HeroService }          from './services/hero.service';
import { HeroSearchComponent }  from './components/heroes/hero-search.component';

import reducer                  from './reducers/index';
import { HeroActions }          from './actions/hero.action';
import { HeroEffects }          from './effects/hero.effects';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(HeroEffects)
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [HeroActions, HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
