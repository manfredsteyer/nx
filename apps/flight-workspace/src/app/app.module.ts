import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingFeatureCreateModule } from '@flight-workspace/booking/feature-create';
import { BookingFeatureUpdateModule } from '@flight-workspace/booking/feature-update';
import { BoardingFeatureStartModule } from '@flight-workspace/boarding/feature-start';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingFeatureCreateModule, BookingFeatureUpdateModule, BoardingFeatureStartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
