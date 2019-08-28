import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';

@NgModule({
  imports: [CommonModule, BookingDomainModule]
})
export class BookingApiModule {}
