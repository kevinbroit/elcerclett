import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {NgPipesModule} from 'ngx-pipes';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    NgxExampleLibraryModule,
    NgPipesModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    NgxExampleLibraryModule,
    NgPipesModule
  ]
})

export class SharedModule {
}
