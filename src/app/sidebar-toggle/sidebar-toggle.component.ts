import {Component} from '@angular/core';
import {SidebarToggleService} from "./sidebar-toggle.service";

@Component({
  selector: 'app-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
  styleUrls: ['./sidebar-toggle.component.scss']
})
export class SidebarToggleComponent {

  constructor(
    private readonly sidebarToggleService: SidebarToggleService
  ) {
  }

  toggle() {
    this.sidebarToggleService.show();
  }

}
