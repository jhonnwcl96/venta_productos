import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-madera',
  templateUrl: './catalogo-madera.component.html',
  styleUrls: ['./catalogo-madera.component.css']
})
export class CatalogoMaderaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('titulo','catalogo para maderas');
  }

}
