import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentErrorComponent } from './../component-error/component-error.component';
import { HttpModule } from '@angular/http';


@NgModule({
    imports:      [ CommonModule,FormsModule,HttpModule ],
    declarations: [ 
        TemplateFormComponent,
        FormDebugComponent,
        ComponentErrorComponent 
     ],
    bootstrap:    []
})
export class TemplateFormModule {  }