import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@flight-workspace/boarding/domain';
import { BookingApiModule } from '@flight-workspace/booking/api';
import { SharedUiAddressModule } from '@flight-workspace/shared/ui-address';

@NgModule({
  imports: [
    CommonModule, 
    BoardingDomainModule, 
    BookingApiModule, 
    SharedUiAddressModule
  ]
})
export class BoardingFeatureStartModule {}
