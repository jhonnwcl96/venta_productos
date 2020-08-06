import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var tata: any;

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
    this.toastExitoso();
    let nombre = $("#nombre").val();
    localStorage.setItem('usuarioLogin', nombre);
  }

  toastExitoso(): void {
    tata.success('Agregado.', 'Se Registro Exitosamente', {
      duration: 4000,
      animate: 'slide'
    });
  }
}
