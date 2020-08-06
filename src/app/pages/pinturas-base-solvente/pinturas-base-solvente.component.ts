import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-base-solvente',
  templateUrl: './pinturas-base-solvente.component.html',
  styleUrls: ['./pinturas-base-solvente.component.css']
})
export class PinturasBaseSolventeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "base_solvente");
    localStorage.setItem('titulo','pinturas base solvente');
  }

}
