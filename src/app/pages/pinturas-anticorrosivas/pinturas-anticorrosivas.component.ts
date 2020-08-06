import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturas-anticorrosivas',
  templateUrl: './pinturas-anticorrosivas.component.html',
  styleUrls: ['./pinturas-anticorrosivas.component.css']
})
export class PinturasAnticorrosivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "anticorrosivas");
    localStorage.setItem('titulo','pinturas anticorrosivas');
  }

}
