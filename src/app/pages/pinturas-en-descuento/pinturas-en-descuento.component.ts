import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-en-descuento',
  templateUrl: './pinturas-en-descuento.component.html',
  styleUrls: ['./pinturas-en-descuento.component.css']
})
export class PinturasEnDescuentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "en_decuento");
    localStorage.setItem('titulo','pinturas en descuento');
  }

}
