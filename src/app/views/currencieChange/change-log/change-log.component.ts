import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss']
})
export class ChangeLogComponent implements OnInit {

  data = [
    {Date:"June 25th, 2020", From:"1.00 EUR", To: "1.2334 USD"},
    {Date:"June 24th, 2020", From:"10.00 EUR", To: "13.2334 USD"},
    {Date:"June 24th, 2020", From:"1.00 EUR", To: "1.3733 CHF"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
