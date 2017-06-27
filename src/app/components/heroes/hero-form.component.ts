import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'rx-hero-form',
    template: `<div *ngIf="hero">
                <h2>{{hero.name}}</h2>
                <div>
                    <label>id: </label>{{hero.id}}
                </div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="hero.name" placeholder="name" />
                </div>
                <button (click)="back.emit()">Back</button>
                <button (click)="save.emit(hero)">Save</button>
            </div>`,
    styles: [`label {
                  display: inline-block;
                  width: 3em;
                  margin: .5em 0;
                  color: #607D8B;
                  font-weight: bold;
                }
                input {
                  height: 2em;
                  font-size: 1em;
                  padding-left: .4em;
                }
                button {
                  margin-top: 20px;
                  font-family: Arial;
                  background-color: #eee;
                  border: none;
                  padding: 5px 10px;
                  border-radius: 4px;
                  cursor: pointer; cursor: hand;
                }
                button:hover {
                  background-color: #cfd8dc;
                }
                button:disabled {
                  background-color: #eee;
                  color: #ccc; 
                  cursor: auto;
                }`]
})
export class HeroForm {
    _hero;
    @Input() set hero(value) {
        this._hero = Object.assign({}, value);
    }
    get hero() {
        return this._hero;
    }

    @Output() back = new EventEmitter();
    @Output() save = new EventEmitter();
}
