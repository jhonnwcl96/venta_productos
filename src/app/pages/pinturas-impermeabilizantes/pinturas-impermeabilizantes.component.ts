import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-impermeabilizantes',
  templateUrl: './pinturas-impermeabilizantes.component.html',
  styleUrls: ['./pinturas-impermeabilizantes.component.css']
})
export class PinturasImpermeabilizantesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "impermeabilizante");
    localStorage.setItem('titulo','pinturas impermeabilizantes');
  }

}
