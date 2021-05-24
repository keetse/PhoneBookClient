import { Injectable } from '@angular/core';
import {PhoneDetail}  from './phone-detail.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhoneDetailService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'http://localhost:61796/api/ContactDetails'
formData:PhoneDetail = new PhoneDetail();
list: PhoneDetail[] = [];
postPhoneDeatil(){
  return this.http.post(this.baseURL,this.formData);
}
reffreshList(){
  this.http.get(this.baseURL)
  .toPromise()
  .then(res => this.list = res as PhoneDetail[]);
}
}
