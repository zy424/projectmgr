import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule, MatIconModule, MatButtonModule} from '@angular/material';
import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parent: CoreModule,
               ir: MatIconRegistry,
               ds: DomSanitizer) {
    if (parent) {
      throw new Error ('The module already exists, please do not load');
    }
    loadSvgResources(ir, ds);
  }
}
