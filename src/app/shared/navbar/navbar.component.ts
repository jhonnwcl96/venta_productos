import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario="";
  constructor() { }

  ngOnInit(): void {
    this.precionar_amburguesa()
  }
  
  precionar_amburguesa() {
    if ($("#amburguesa").attr('aria-expanded') === "true") {
      $("#amburguesa").click();
    }
  }

  getUsuarioSesion(){
    this.usuario=localStorage.getItem('usuarioLogin');
    let res=true;
    if(this.usuario==""){
      res=false;
    }
    return res;
  }

  cerrarSesion(){
    localStorage.setItem('usuarioLogin', "");
  }


  
}
