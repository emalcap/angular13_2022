import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnDestroy {
// 
public titulo?:string ;
// Subscription se tiene en la memoria tener cuidado // OnDestroy
public titulosub:Subscription;

  constructor(private router:Router) { 
    this.titulosub = this.getArgumentos().subscribe(({titulo}) =>{
      this.titulo=titulo;
      // para tituloventana
      document.title = `AdminLte . ${titulo}`;
  
    }
   
    )
  }
  ngOnDestroy(): void {
    //evitar fugas de memoria
    this.titulosub.unsubscribe();
    
  }


  ngOnInit(): void {
  }
//emp
getArgumentos(){
  // pipi final de la navegacion
  return this.router.events.pipe(
    filter((event:any) => event instanceof ActivationEnd),
    filter((event:ActivationEnd) => event.snapshot.firstChild === null),
    map((event:ActivationEnd) =>event.snapshot.data)
  )

}


}
