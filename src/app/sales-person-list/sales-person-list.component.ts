import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Alex', 'Upper', 'alexupper@mail.com', 50000),
    new SalesPerson('John', 'Doe', 'johndoe.mail.com', 40000),
    new SalesPerson('Vasis', 'Pupkinis', 'vasya@mail.ru', 90000),
    new SalesPerson('Ivan', 'Ivanov', 'ivanov@rambler.ru', 6000)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
