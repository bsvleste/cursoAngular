import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentErrorComponent } from './component-error/component-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComponentErrorComponent,
    FormDebugComponent
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,    
    ComponentErrorComponent,
    FormDebugComponent
  ]

})
export class SharedModule { }
