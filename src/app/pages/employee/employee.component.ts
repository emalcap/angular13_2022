import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  openHideModal:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

   openModal(){
  
    this.openHideModal = true;
   }

   hiideModal(){
    this.openHideModal = true;
   }
}
