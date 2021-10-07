import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.css']
})
export class ComponentCardComponent implements OnInit {
  property:any={
    "Id":1,
    "Name":"Prabhu House",
    "Type":"House",
    "Price":12000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
