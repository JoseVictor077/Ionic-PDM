import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nomes: string[];

  constructor() {
    this.nomes = ['Nome1', 'Nome2', 'Nome3']; // Aqui você pode adicionar os nomes que desejar
  }
}
