import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import                   'rxjs/add/operator/toPromise';
import { Hero }          from '../models/hero';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]> {
      return this.http.get(this.heroesUrl).map(res => res.json().data as Hero[]);
  }

  getHero(id: number): Observable<Hero> {
      return this.http.get(`${this.heroesUrl}/${id}`).map(response => response.json().data as Hero);
  }

  deleteHero(hero) {
      return this.http.delete(`${this.heroesUrl}/${hero.id}`).map(res => hero);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  //update(hero: Hero): Promise<Hero> {
  //  const url = `${this.heroesUrl}/${hero.id}`;
  //  return this.http
  //    .put(url, JSON.stringify(hero), {headers: this.headers})
  //    .toPromise()
  //    .then(() => hero)
  //    .catch(this.handleError);
  //}
  saveHero(hero) {
      if (hero.id === 0) {
          return this.http.post(`${this.heroesUrl}`, hero)
              .map(res => res.json());
      } else {
          return this.http.put(`${this.heroesUrl}/${hero.id}`, hero)
              .map(res => res.json());
      }
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

