import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { MatIconRegistry} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      BrowserAnimationsModule,
      AppRoutingModule
  ],
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
