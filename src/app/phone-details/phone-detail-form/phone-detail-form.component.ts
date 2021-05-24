import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PhoneDetailService} from 'src/app/shared/phone-detail.service';

@Component({
  selector: 'app-phone-detail-form',
  templateUrl: './phone-detail-form.component.html',
  styles: [
  ]
})
export class PhoneDetailFormComponent implements OnInit {

  constructor(public service:PhoneDetailService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postPhoneDeatil().subscribe(
      res =>{

      },
      err => {console.log(err);}
    )
  }

}
