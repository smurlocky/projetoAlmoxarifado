import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( public router: Router) {}
  readonly menus: Array<PoMenuItem> = [
    { label: 'Loging', shortLabel: 'log', icon: "po-icon-user", link:"/" },
    { label: 'Home', shortLabel: 'h',icon: "po-icon-home", link:"/home" },
    { label: 'Produtos', shortLabel: 'prd',icon: "po-icon-folder", link:"/productPage", subItems:[
      { label: 'Estoque', shortLabel: 'Estq', icon: "po-icon-folder", link:"/storagePage"},
      { label: 'Pedido de compra', shortLabel: 'Estq', icon: "po-icon-folder", link:"/storagePage"}
    ]},
  ];

  

}
