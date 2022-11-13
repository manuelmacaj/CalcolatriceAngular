import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numeriCalcolatrice = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  simboli = ['+', '-', '*', '/'];

  num1: number = 0;
  num2 = 0;
  segnoSelezionato = '';
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
    this.num1 = parseFloat(this.display);
    this.segnoSelezionato = segno;
    this.display = "";
  }

  private checkSecondNumber() {
    if (this.num2 == 0 || this.num1 != Number(this.display))
      this.num2 = Number(this.display)
  }


  calcolo() {
    this.checkSecondNumber();

    console.log(this.num1 + " " + this.num2)
    const a = this.num1;
    const b = this.num2;
    let result: number
    switch (this.segnoSelezionato) {
      case '+':
        result = a + b;
        this.resultCalc(result);
        break;
      case '-':
        result = a - b;
        this.resultCalc(result);
        break;
      case '*':
        result = a * b;
        this.resultCalc(result);
        break;
      case '/':
        result = a / b;
        this.resultCalc(result);
        break;
    }
  }

  private resultCalc(result: number) {
    this.num1 = result
    this.display = result.toString()
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
