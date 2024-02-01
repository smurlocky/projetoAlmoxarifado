import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor ( public router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Loging', shortLabel: 'log', icon: "po-icon-user",link:"" },
    { label: 'Home', shortLabel: 'h',icon: "po-icon-home",link:"home" },
    { label: 'Produtos', shortLabel: 'prd',icon: "po-icon-folder",link:"productPage" },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
