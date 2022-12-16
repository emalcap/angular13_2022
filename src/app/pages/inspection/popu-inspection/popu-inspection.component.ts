import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popu-inspection',
  templateUrl: './popu-inspection.component.html',
  styleUrls: ['./popu-inspection.component.css']
})
export class PopuInspectionComponent implements OnInit {

  openHideModal = false ;

  constructor() { }

  ngOnInit(): void {
    alert(80)
  }

  loadEditData(code:any){

    alert('elmer:'+code)
  };

 


}
