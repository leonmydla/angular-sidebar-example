import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarToggleComponent} from './sidebar-toggle/sidebar-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
