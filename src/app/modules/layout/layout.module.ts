import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import layoutComponents from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...layoutComponents],
  imports: [CommonModule, RouterModule],
  exports: [...layoutComponents],
})
export class LayoutModule {}
