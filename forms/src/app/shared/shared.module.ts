import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentErrorComponent } from './component-error/component-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentErrorComponent,
    FormDebugComponent
  ],
  exports:[    
    ComponentErrorComponent,
    FormDebugComponent
  ]

})
export class SharedModule { }
