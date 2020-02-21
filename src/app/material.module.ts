import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class MaterialModulev {}
