import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { CompraProducto } from '../../models/CompraProducto';
declare var $: any;
declare var swal: any;

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
  constructor() { }

  ngOnInit(): void {
    this.imagen = localStorage.getItem('imagen');
    this.precioProducto = parseInt(localStorage.getItem('precio'));
  }

  comprarProducto() { }

  aniadirCarrito() {
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
    })
  }
}
