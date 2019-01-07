import { Component, OnInit } from '@angular/core';
import { shimHostAttribute } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  public statut: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  switchStatus() {
   this.statut = !this.statut;
  }
}
