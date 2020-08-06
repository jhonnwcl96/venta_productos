import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-anticorrosivas',
  templateUrl: './catalogo-anticorrosivas.component.html',
  styleUrls: ['./catalogo-anticorrosivas.component.css']
})
export class CatalogoAnticorrosivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('titulo','catalogo anticorrosivas');
  }

}
