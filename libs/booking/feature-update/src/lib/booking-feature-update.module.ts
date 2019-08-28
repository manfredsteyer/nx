import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flight-workspace/booking/domain';
import { BookingUiModule } from '@flight-workspace/booking/ui';

@NgModule({
  imports: [CommonModule, BookingDomainModule, BookingUiModule]
})
export class BookingFeatureUpdateModule {}
