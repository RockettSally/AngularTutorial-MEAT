import { Address } from './../models/address.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  address: Address;

  constructor() { 

  }

  ngOnInit() {
    
  }

}
