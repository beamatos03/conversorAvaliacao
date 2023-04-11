import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  moeda : string = "";
  valor : number = 0;
  cambio: number = 0;
 escolha : string = "";
 resultado : string = "";




 calcular(){
  var resultado = this.valor*this.cambio;
  this.resultado = "O resultado da conversão de BRL para " + this.moeda + ": " + resultado.toFixed(2);
 } 


}


