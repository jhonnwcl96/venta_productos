import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  redireccion() {
    let nombre = $("#nombre").val();
    localStorage.setItem('usuarioLogin', nombre);
  }
}
