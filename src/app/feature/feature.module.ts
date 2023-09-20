import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PropertyComponent } from './property/property.component';
import { NormalPropertyComponent } from './normal-property/normal-property.component';
import { ReactivePropertyComponent } from './reactive-property/reactive-property.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PropertyComponent,
    NormalPropertyComponent,
    ReactivePropertyComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule
  ]
})
export class FeatureModule { }
