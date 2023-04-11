import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  moeda : number = 0;
  valor : number = 0;
 resultado : string = ""



 moedas(value: string){
  switch(value) {
    case "CAD":
       // if modo 1 is selected do something.
       break;
    case "MXN":
       // if modo 2 is selected do something.
       break;
    case "KRW":
       // if modo 3 is selected do something.
       break;
  }
}
