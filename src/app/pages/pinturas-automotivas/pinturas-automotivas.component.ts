import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-automotivas',
  templateUrl: './pinturas-automotivas.component.html',
  styleUrls: ['./pinturas-automotivas.component.css']
})
export class PinturasAutomotivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "automotivas");
    localStorage.setItem('titulo','pinturas automotivas');
  }

}
