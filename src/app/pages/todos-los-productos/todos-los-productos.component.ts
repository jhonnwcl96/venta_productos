import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-todos-los-productos',
  templateUrl: './todos-los-productos.component.html',
  styleUrls: ['./todos-los-productos.component.css']
})
export class TodosLosProductosComponent implements OnInit {
constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tipo_pinturas', "todos_los_productos");
    localStorage.setItem('titulo','todos los productos');
  }
  comprarProducto() {
  }
}
