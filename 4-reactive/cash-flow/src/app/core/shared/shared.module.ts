import { ReactiveFormsModule } from '@angular/forms';
import { ToolsService } from './forms/tools.service';
import { ValidatorsService } from './forms/validators.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './forms/error/error.component';
import { ControlComponent } from './forms/control/control.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ErrorComponent,
    ControlComponent
  ],
  exports: [

  ]
})
export class SharedModule { }
