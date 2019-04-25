import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule} from '../services/services.module';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { MatIconRegistry} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import '../utils/debug.util';
import '../utils/debug.util';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ServicesModule.forRoot(),
    AppRoutingModule,
  ],
  exports: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      BrowserAnimationsModule,
      AppRoutingModule
  ],
    providers: [
        {
            provide: 'BASE_CONFIG',
            useValue: {
                uri: 'http://localhost:3000'
                // uri: 'http://manage.t.imooc.io/apis',
            }
        }
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
