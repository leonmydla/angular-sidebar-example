import {Component, OnInit} from '@angular/core';
import {SidebarToggleService} from "../sidebar-toggle/sidebar-toggle.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly sidebarToggleService: SidebarToggleService
  ) {
  }

  open = false;

  ngOnInit(): void {
    this.listenForToggleEvents();
  }

  hide() {
    this.sidebarToggleService.hide();
  }

  private listenForToggleEvents() {
    this.sidebarToggleService
      .getEvent()
      .subscribe(open => this.open = open);
  }

}
