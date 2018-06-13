import { paymentOptions } from './../constants';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Address } from './../models/address.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  address: Address = {street: '', number: '', description: ''};
  paymentOptions: RadioOption[] = paymentOptions;
  selectedPaymentOption: any = "";

  constructor() { 

  }

  ngOnInit() {
    
  }

}
