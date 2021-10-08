import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {

  private readonly toggle = new Subject<boolean>();

  getEvent(): Observable<boolean> {
    return this.toggle;
  }

  show() {
    this.toggle.next(true);
  }

  hide() {
    this.toggle.next(false);
  }
}
