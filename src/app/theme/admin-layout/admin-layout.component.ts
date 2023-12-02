import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AdminLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpen = true;
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
