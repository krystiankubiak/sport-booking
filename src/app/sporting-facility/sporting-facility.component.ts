import { Component, OnInit, Input } from '@angular/core';
import { SportingFacility } from './sporting-facility.model';
import { Address } from '../address/address.model';

@Component({
  selector: 'app-sporting-facility',
  templateUrl: './sporting-facility.component.html',
  styleUrls: ['./sporting-facility.component.css']
})
export class SportingFacilityComponent implements OnInit {

  address: Address = {   id: 1,
    city: 'Wroclaw',
    postCode: '52-010',
    street: 'Opolska',
    number: '23b',
    number2: '1'
  };

  @Input()
  sportingFacility: SportingFacility; // = {name: 'Dom', address: this.address};




  constructor() { }

  ngOnInit() {
  }

}
