import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
@Input() SideNavStatus:boolean=false;
  constructor() { }

  list=[
    {
      number:'1',
      name:'Home',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'Analytics',
      icon:'fa-solid fa-chart-line'
    },
    {
      number:'3',
      name:'Products',
      icon:'fa-solid fa-box'
    }
  ];

  ngOnInit(): void {
  }

}
