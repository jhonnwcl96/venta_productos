import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-para-madera',
  templateUrl: './pinturas-para-madera.component.html',
  styleUrls: ['./pinturas-para-madera.component.css']
})
export class PinturasParaMaderaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "para_madera");
    localStorage.setItem('titulo','pinturas para madera');
  }

}
