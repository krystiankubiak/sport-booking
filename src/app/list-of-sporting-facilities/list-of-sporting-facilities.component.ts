import { Component, OnInit } from '@angular/core';
import { SportingFacility } from '../sporting-facility/sporting-facility.model';

@Component({
  selector: 'app-list-of-sporting-facilities',
  templateUrl: './list-of-sporting-facilities.component.html',
  styleUrls: ['./list-of-sporting-facilities.component.css']
})
export class ListOfSportingFacilitiesComponent implements OnInit {
 /* listOfSportingFacilities: SportingFacility[] = JSON.parse(`[
    {"name": "Dom",
      "address": {
        "id": 1,
        "city": "Wroclaw",
        "postCode": "52-010",
        "street": "Opolska",
        "number": "23b",
        "number2": "1"
      }
    },
      {
      "name": "dom leziona",
      "address": {
        "id": 1,
        "city": "leziona",
        "postCode": "52-010",
        "street": "Opolska",
        "number": "23b",
        "number2": "1"
      }
    },
    {
      "name": "Dom  2",
      "address": {
        "id": 1,
        "city": "Wroclaw",
        "postCode": "52-010",
        "street": "Opolska",
        "number": "23b",
        "number2": "1"
      }
    }
  ]
  `
    );

   */
    // 'data-list-sporting-facilities.json
    listOfSportingFacilities: SportingFacility[] = JSON.parse('data-list-sporting-facilities.json');
  constructor() { }

  ngOnInit() {
  }

}
