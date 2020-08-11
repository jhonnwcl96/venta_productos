import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { CompraProducto } from '../../models/CompraProducto';
import { Router } from '@angular/router';
declare var $: any;
declare var swal: any;
declare var tata: any;

@Component({
  selector: 'app-form-compra-productos',
  templateUrl: './form-compra-productos.component.html',
  styleUrls: ['./form-compra-productos.component.css']
})
export class FormCompraProductosComponent implements OnInit {

  producto: Producto = new Producto(12, "", "", "", "", 0, "");
  compra: CompraProducto = new CompraProducto(0, "", 0, 0);
  listaProducto: CompraProducto[] = [];
  id: number = 0;
  precioTotal = 0;
  cantidadTotal = 0;
  imagen: string = "";
  precioProducto: number = 0;

  nombreProducto="";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nombreProducto = localStorage.getItem('nombreProducto');

    this.imagen = localStorage.getItem('imagen');
    this.precioProducto = parseInt(localStorage.getItem('precio'));
  }

  comprarProducto() { }
 
  toastExitoso(): void {
    tata.success('Agregado.', 'Se Agregaron Productos Al Carrito', {
      duration: 4000,
      animate: 'slide'
    });
  }
  aniadirCarrito() {
    this.toastExitoso();
    let cantidad = parseInt($("#cantidad").val());
    let color = $("#color").val();
    let precio = cantidad * this.precioProducto;
    this.id += 1;
    this.precioTotal += precio;
    this.cantidadTotal += cantidad;
    this.listaProducto.push(new CompraProducto(cantidad, color, precio, this.id))
    $("#cantidad").val("");
    $("#color").val("")
  }
  eliminarProducto(producto: CompraProducto) {
    let listaAux: CompraProducto[] = [];
    let cantidadAux = 0;
    let precioAux = 0;
    for (let i = 0; i < this.listaProducto.length; i++) {
      if (!(this.listaProducto[i].getId() == producto.getId())) {
        listaAux.push(this.listaProducto[i]);
        cantidadAux += this.listaProducto[i].getCantidad();
        precioAux += this.listaProducto[i].getPrecio();
      }
    }
    this.cantidadTotal = cantidadAux;
    this.precioTotal = precioAux;
    this.listaProducto = listaAux;
  }

  mensaje(): void {
    swal.fire({
      title: 'Comprar',
      text: "Confirmar Compra De Productos",
      imageUrl: this.imagen,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image', showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Exitoso!',
          'La Compra Fue Exitosa',
          'success'
        )
        
      } else {
        swal.fire(
          'Cancelado!',
          'La Compra Fue Cancelada',
          'error'
        )
      }
    }).then(()=>{
      this.router.navigate(['/todos_los_productos']);
    })
  }

  validadCampos() {
    var nombres = $('#nombreUsuario').val();
    var apellidoP:string = $("#apellidPt").val();
    let apellidoM:string =String($("#apellidMt").val());
    let numTargeta:String = $("#targetaC").val();
    if(nombres==""){
    console.log("holaaaaaaaaaaaaa");
    }
    if(this.listaProducto.length==0){
      console.log("holaaaaaaaaaaaaa 2222222");
      }
    console.log(nombres + "--" + apellidoP + "--" + apellidoM + "----" + numTargeta + "--" + this.listaProducto)
    if (nombres == "" || apellidoP == undefined || apellidoM == undefined || numTargeta == undefined || this.listaProducto.length==0) {
      this.mostrarMensajeError();
    } else {
      this.mensaje();
    }
  }

   
  mostrarMensajeError() {
    tata.error('Error', 'Debe llenar todos los campos y aniadir almenos un producto al carrito', {
      duration: 4000,
      animate: 'slide'
    });
  }
}
