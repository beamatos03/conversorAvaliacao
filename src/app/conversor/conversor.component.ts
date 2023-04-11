import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  moeda : number = 0;
  valor : number = 0;
 escolha : string = "";
 resultado : string = "";



 moedas(){
  switch(this.escolha) {
    case "CAD":
       this.resultado = this.escolha;
       break;
    case "MXN":
      this.resultado = this.escolha;
       break;
    case "KRW":
      this.resultado = this.escolha;
       break;
  }
 }}
