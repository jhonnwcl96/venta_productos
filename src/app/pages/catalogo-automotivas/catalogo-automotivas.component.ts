import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-automotivas',
  templateUrl: './catalogo-automotivas.component.html',
  styleUrls: ['./catalogo-automotivas.component.css']
})
export class CatalogoAutomotivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('titulo','catalogo automotivas');
  }

}
