import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  public frmCredito:any = FormGroup;

  constructor(private fb :FormBuilder,
              private pd:DatePipe,
              private decimalPipe: DecimalPipe
              ) { }

  ngOnInit(): void {
    this.frmCredito = this.initfrmCredito()
  }

  public initfrmCredito(){   
    return this.fb.group({
      monto: [null],
      fecha:[null],
      tea: [null],
      nroCuotas:[null],
    })

  }

}
