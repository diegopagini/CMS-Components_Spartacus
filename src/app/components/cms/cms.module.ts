import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponentComponent } from './../cms-component/cms-component.component';

@NgModule({
  declarations: [CmsComponentComponent],
  imports: [CommonModule],
  exports: [CmsComponentComponent],
})
export class CmsModule {}
