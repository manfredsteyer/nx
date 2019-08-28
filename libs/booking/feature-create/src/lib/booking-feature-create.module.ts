import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  imports: [
    CommonModule, 
    BookingDomainModule
  ],
  declarations: [
    BookingComponent
  ],
  exports: [
    BookingComponent
  ]
})
export class BookingFeatureCreateModule {}
