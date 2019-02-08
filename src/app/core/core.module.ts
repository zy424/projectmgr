import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error ('The module already exists, please do not load');
    }
  }
}
