import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'task-mgt-ui';

  ngAfterViewInit(): void {
    console.log('Methgod not implemented. ngAfterViewInit');
  }
  ngOnInit(): void {
    console.log('Method not implemented. ngOnInit');
  }

}
