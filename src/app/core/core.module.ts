import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error ('The module already exists, please do not load');
    }
  }
}
