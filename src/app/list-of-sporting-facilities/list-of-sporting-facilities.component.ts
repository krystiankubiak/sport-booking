import { Component, OnInit } from '@angular/core';
import { SportingFacility } from '../sporting-facility/sporting-facility';

@Component({
  selector: 'app-list-of-sporting-facilities',
  templateUrl: './list-of-sporting-facilities.component.html',
  styleUrls: ['./list-of-sporting-facilities.component.css']
})
export class ListOfSportingFacilitiesComponent implements OnInit {
  listOfSportingFacilitiesComponent: SportingFacility[];

  constructor() { }

  ngOnInit() {
  }

}
