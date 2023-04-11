import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  moeda : number = 0;
  valor : number = 0;
  cambio: number = 0;
 escolha : string = "";
 resultado : string = "";




 calculaCAD(){
  var resultado = this.valor/this.cambio;
  this.resultado = "O resultado da conversão de BRL para Dolares canadenses é: CAD " + resultado.toFixed(2);
 }

 calculaKRW(){
  var resultado = this.valor/this.cambio;
  this.resultado = "O resultado da conversão de BRL para Wons Sul Coreanos é: WON " + resultado.toFixed(2);
 }

 calculaBRL(){
  var resultado = this.valor/this.cambio;
  this.resultado = "O resultado da conversão de BRL para Dolares canadenses é: CAD " + resultado.toFixed(2);

 }
   


}


