import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-impermeabilizante',
  templateUrl: './catalogo-impermeabilizante.component.html',
  styleUrls: ['./catalogo-impermeabilizante.component.css']
})
export class CatalogoImpermeabilizanteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('titulo','catalogo impermeabilizantes');
  }

}
