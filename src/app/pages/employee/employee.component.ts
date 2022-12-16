import { Component, OnInit, ViewChild} from '@angular/core';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

  functionedit(){
   alert(1)
   // const modalRef = this.servicoModal.open(ModalemployeeComponent)
    //modalRef.componentInstance.pernos = persona:any[];
  }
  
}
