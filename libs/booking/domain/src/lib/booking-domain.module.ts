import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingUtilModule } from '@flight-workspace/booking/util';
import { SharedUtilAuthModule } from '@flight-workspace/shared/util-auth';

@NgModule({
  imports: [CommonModule, BookingUtilModule, SharedUtilAuthModule]
})
export class BookingDomainModule {}

