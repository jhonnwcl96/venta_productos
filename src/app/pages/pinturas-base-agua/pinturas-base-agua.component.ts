import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-base-agua',
  templateUrl: './pinturas-base-agua.component.html',
  styleUrls: ['./pinturas-base-agua.component.css']
})
export class PinturasBaseAguaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "base_agua");
    localStorage.setItem('titulo','pinturas base agua');
  }

}
