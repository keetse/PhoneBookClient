import { PhoneDetailService } from 'src/app/shared/phone-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styles: [
  ]
})
export class PhoneDetailsComponent implements OnInit {

  constructor(public service: PhoneDetailService) { }
  searchedKeyword: string ='';
  ngOnInit(): void {
    this.service.reffreshList();
  }

}
