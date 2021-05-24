import { PhoneDetailService } from './shared/phone-detail.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneDetailFormComponent } from './phone-details/phone-detail-form/phone-detail-form.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailsComponent,
    PhoneDetailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  providers: [PhoneDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
