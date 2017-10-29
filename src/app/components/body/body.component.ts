
import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
  })
  export class BodyComponent {
     mostrarCard:boolean=false;
     public frase:any={
          mensaje:"Parece que no pero las guapas también se tiran pedos, también los listos sumamos con los dedos",
          autor:"Doble V"
      }
      personajes=["spiderman","Venom","Dr. Octupus"];
    
  }
  