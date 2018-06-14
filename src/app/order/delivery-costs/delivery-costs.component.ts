import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() deliveryTax: number = 0;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  totalValue(): number{
    return this.deliveryTax + this.itemsValue;
  }

}
