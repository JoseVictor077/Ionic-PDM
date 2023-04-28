import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [
    { title: 'Pagina inicial', url: '/home' },
    { title: 'Pagina 1', url: '/pagina2' },
    { title: 'Pagina 2', url: '/pagina3' },
  ];

  constructor(private menuCtrl: MenuController) {}

  closeMenu() {
    this.menuCtrl.close();
  }
}
