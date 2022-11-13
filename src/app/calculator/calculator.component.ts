import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numeriCalcolatrice = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  simboli = ['+', '-', '*', '/'];

  num1 = 0;
  segnoSelezionato = '';
  num2 = 0;
  display = "0";

  constructor() { }

  ngOnInit(): void {
  }

  inserisciNumero(numero: number) {
    if (this.display.startsWith("0", 0))
      this.display = numero.toString();
    else
      this.display += numero.toString();
  }

  selezionaSegno(segno: string) {
    this.segnoSelezionato = segno;
    this.num1 = Number(this.display.toString());
    this.display = "";
  }

  inserisciNumero2(): void {
    if (this.display != String(this.num1))
      this.num2 = Number(this.display.toString());
  }

  calcolo() {
    this.inserisciNumero2();
    switch (this.segnoSelezionato) {
      case '+':
        console.log(this.num1 + " + " + this.num2);
        this.display = String(this.num1 += this.num2)
        break;
      case '-':
        console.log(this.num1 + " - " + this.num2);
        this.display = String(this.num1 -= this.num2)
        break;
      case '*':
        console.log(this.num1 + " * " + this.num2);
        this.display = String(this.num1 *= this.num2)
        break;
      case '/':
        console.log(this.num1 + " / " + this.num2);
        this.display = String(this.num1 /= this.num2)
        break;
    }
  }

  clearAll() {
    if (this.display != "0") {
      this.display = "0"
      this.num1 = 0
      this.num2 = 0
      this.segnoSelezionato = ""
      console.log("clear all")
    }
  }
}
