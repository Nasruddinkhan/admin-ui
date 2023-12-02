import { Component, EventEmitter, Input, Output } from '@angular/core';
import screenfull from 'screenfull';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  @Input() showToggle = true;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }


  toggleFullscreen() {
		if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
