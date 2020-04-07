import { Component } from '@angular/core';
import {ContractorService} from './contractor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = false;
  title = 'CRUDDemoFront';
  navbarCollapsed = true;
  constructor() {
  }

  hideMe(event) {
    event.preventDefault();
    this.hide = true;
    return false;
  }
}
