import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Router } from '@angular/router';

declare var swal: any;
declare var tata: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {



  listaDeProductos: Producto[] = [];
  producto: Producto = new Producto(1, "amarillo", "holaholaholahola", "../../../assets/images/tipos-de-pinturas/anticorrosiva-OHM-241x187.jpg", "anticorr", 11, "anticoo");
  tipoPintura = "";
  titulo = "";
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.titulo = localStorage.getItem('titulo');
    this.tipoPintura = localStorage.getItem("tipo_pinturas");
    this.cargarLista();
  }
  setProducto(producto: Producto) {
    this.producto = producto;
  }
  redireccion(producto: Producto) {
    localStorage.setItem('titulo', producto.getTipo());
    let ruta = "";
    if (producto.getTipo() == "Anticorrosivas") {
      ruta = "pinturas_anticorrosivas";
    } else {
      if (producto.getTipo() == "Automotivas") {
        ruta = "pinturas_automotivas";
      } else {
        if (producto.getTipo() == "Pinturas Base Agua") {
          ruta = "pinturas_base_agua";
        } else {
          if (producto.getTipo() == "Pinturas Base Solvente") {
            ruta = "pinturas_base_solvente";
          } else {
            if (producto.getTipo() == "Impermeabilizante") {
              ruta = "pinturas_impermeabilizante";
            } else {
              if (producto.getTipo() == "Madera") {
                ruta = "pinturas_para_madera";
              }
            }
          }
        }
      }
    }
    this.router.navigate(['/' + ruta]);

  }
  comprarProducto() {
  }

  cargarLista() {
    console.log(this.tipoPintura, "-----------")
    if (this.tipoPintura == "todos_los_productos") {
      this.todosLosProductos();
    } else {
      if (this.tipoPintura == "anticorrosivas") {
        this.getAnticorrosivas();
      } else {
        if (this.tipoPintura == "automotivas") {
          this.getAutomotivas();
        } else {
          if (this.tipoPintura == "base_agua") {
            this.getBaseAgua();
          } else {
            if (this.tipoPintura == "base_solvente") {
              this.getBaseSolvente();
            } else {
              if (this.tipoPintura == "impermeabilizante") {
                this.getImpermeabilizante();
              } else {
                if (this.tipoPintura == "para_madera") {
                  this.getParaMadera();
                } else {
                  if (this.tipoPintura == "combos") {
                    this.getCombos();
                  } else {
                    if (this.tipoPintura == "en_decuento") {
                      this.getEnDescuento();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  todosLosProductos() {
    this.producto = new Producto(1, "anaranjado", "Pintura anticorrosiva alquídica a base de resinas alquídicas, solventes, óxido de hierro de alta calidad e inhibidores de corrosión libres de plomo. USOS:   Hierro y Acero Protección de estructuras metálicas, rejas de hierro, ventanas, puertas, cañerías, maquinaria, etc.,", "../../../assets/images/tipos-de-pinturas/anticorrosiva-OHM-241x187.jpg", "Oxido De Hierro", 45, "Anticorrosivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "marron", "NITROLAC ACABADO NITROCELULÓSICO TIPO DUCO PARA EL REPINTADO DE AUTOS C-20 DESCRIPCIÓN Pintura, a base de nitrocelulosa y resinas sintéticas plastificantes, de secado rápido y fácil pulido. USOS:   Retoques y repintado general de automóviles, vehículos de trabajo pesado, refrigeradores, muebles metálicos, etc.", "../../../assets/images/tipos-de-pinturas/automotiva-nitrolac-300x231.jpg", "Nitrolac", 87, "Automotivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "blanco", "Sellador de paredes fondo sellador blanco de paredes, a base de resina acrílica estirenada. Sella y uniforma la superficie.", "../../../assets/images/tipos-de-pinturas/baseAgua.jpg", "Sellador De Paredes", 70, "Pinturas Base Agua");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "Esmalte sintético a base de resinas alquí­dicas, pigmentos orgánicos y/o inorgánicos y solventes seleccionados. Es un producto de fácil aplicación, muy buena adherencia, elasticidad y poder. USOS:   HIERRO Y ACERO protección de estructuras metálicas, maquinarias, puertas, ventanas, rejas, muebles de jardín, instalaciones industriales en ambientes de baja agresión química, etc.", "../../../../assets/images/tipos-de-pinturas/baseSolvente.jpg", "R. Brillo", 80, "Pinturas Base Solvente");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "PINTURA PARA PISCINAS PINTURA AL AGUA PARA PISCINAS, CUARTOS DE BAÑO, TANQUES DE AGUA Y FUENTES DE CONCRETO A-72 DESCRIPCIÓN Pintura a base de resinas acrílicas al agua y pigmentos seleccionados que le confieren excelentes características de resistencia a inmersión de agua potable.", "../../assets/images/tipos-de-pinturas/impermeabilizante.jpg", "F. Impermeable Tex", 40, "Impermeabilizante");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "cefe", "SELLADOR DE MADERA FONDO TAPAPOROS PARA MADERA, A BASE DE NITROCELULOSA B-40 DESCRIPCIÓN Producto formulado a base de nitrocelulosa, resinas sintéticas plastificantes y solventes balanceados. USOS:   Para el sellado de poros en superficies de madera en general. Venestas, aglomerados, muebles, armarios, maderas decorativas, etc.", "../../assets/images/tipos-de-pinturas/madera-sellador-de-madera-3.5l-multipass.png", "Sellador De Madera", 40, "Madera");
    this.listaDeProductos.push(this.producto);
  }
  getAnticorrosivas() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "Pintura anticorrosiva alquídica a base de resinas alquídicas, solventes, óxido de hierro de alta calidad e inhibidores de corrosión libres de plomo. USOS:   Hierro y Acero Protección de estructuras metálicas, rejas de hierro, ventanas, puertas, cañerías, maquinaria, etc.", "../../../assets/images/Todos-los-productos/anticorrosiva/anticorrosiva-OHM-241x187.jpg", "Oxido De Hierro", 45, "Anticorrosivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "PRIMER ALQUÍDICO FONDO ANTICORROSIVO ALQUÍDICO- FENÓLICO DE GRAN ADHERENCIA PARA USO INDUSTRIAL D-20 DESCRIPCIÓN Fondo anticorrosivo a base de resina alquídica modificada, de alto poder antioxidante, excelente adherencia sobre hierro y acero, rápido secado y pigmento inhibidor de la corrosión, libre de plomo y cromo (fosfato de zinc modificado).", "../../../assets/images/Todos-los-productos/anticorrosiva/anticorrosiva-PEI-241x187.jpg", "Extra Interperie", 46, "Anticorrosivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "pintura anticorrosiva de aplicación directa sobre las superficies de hierro o acero, ya sean nuevas u oxidadas, sin necesidad de utilizar ninguna imprimación previa. USOSHierro y Acero Aplicación directa sobre hierro y acero, sin imprimaciones. Es eficaz incluso directamente sobre superficies oxidadas, con sólo eliminar las partículas sueltas de óxido. ", "../../../assets/images/Todos-los-productos/anticorrosiva/satin-forja-768x594.jpg", "Santi Forja", 66, "Anticorrosivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "WASH PRIMERIMPRIMANTE DE DOS COMPONENTES ESPECIAL PARA PREPARARSUPERFICIES DE ACERO GALVANIZADO Y ALUMINIO.D-25 DESCRIPCIÓN Imprimante de dos componentes a base de vinil butiral, pigmento inhibidor sin plomo y un reactivo ácido orgánico que reacciona con el metal formando una película unida químicamente a la base.", "../../../../assets/images/Todos-los-productos/anticorrosiva/wash-primer1-227x187.jpg", "Wash Primer", 99, "Anticorrosivas");
    this.listaDeProductos.push(this.producto);
  }
  getAutomotivas() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "Pintura anticorrosiva alquídica a base de resinas alquídicas, solventes, óxido de hierro de alta calidad e inhibidores de corrosión libres de plomo. USOS:   Hierro y Acero Protección de estructuras metálicas, rejas de hierro, ventanas, puertas, cañerías, maquinaria, etc.", "../../../assets/images/Todos-los-productos/automotivas/almunio-alta-temperatura-300x231.jpg", "Aluminio A. T.", 30, "Automotivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "PRIMER ALQUÍDICO FONDO ANTICORROSIVO ALQUÍDICO- FENÓLICO DE GRAN ADHERENCIA PARA USO INDUSTRIAL D-20 DESCRIPCIÓN Fondo anticorrosivo a base de resina alquídica modificada, de alto poder antioxidante, excelente adherencia sobre hierro y acero, rápido secado y pigmento inhibidor de la corrosión, libre de plomo y cromo (fosfato de zinc modificado).", "../../../assets/images/Todos-los-productos/automotivas/automotiva-nitrolac-300x231.jpg", "Nitrolac", 87, "Automotivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "pintura anticorrosiva de aplicación directa sobre las superficies de hierro o acero, ya sean nuevas u oxidadas, sin necesidad de utilizar ninguna imprimación previa. USOSHierro y Acero Aplicación directa sobre hierro y acero, sin imprimaciones. Es eficaz incluso directamente sobre superficies oxidadas, con sólo eliminar las partículas sueltas de óxido. ", "../../../assets/images/Todos-los-productos/automotivas/automotiva-surfacer-300x231.jpg", "Surfacer", 92, "Automotivas");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "WASH PRIMERIMPRIMANTE DE DOS COMPONENTES ESPECIAL PARA PREPARARSUPERFICIES DE ACERO GALVANIZADO Y ALUMINIO.D-25 DESCRIPCIÓN Imprimante de dos componentes a base de vinil butiral, pigmento inhibidor sin plomo y un reactivo ácido orgánico que reacciona con el metal formando una película unida químicamente a la base.", "../../../../assets/images/Todos-los-productos/automotivas/masa-rapida-300x231.jpg", "Masa Rapida", 82, "Automotivas");
    this.listaDeProductos.push(this.producto);
  }
  getBaseAgua() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "Fondo sellador blanco de paredes, a base de resina acrílica estirenada. Sella y uniforma la superficie.", "../../../assets/images/Todos-los-productos/pinturas base agua/atuco-veneciano-300x231.jpg", "Stuco Veneciano", 70, "Base Agua");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "PRIMER ALQUÍDICO FONDO ANTICORROSIVO ALQUÍDICO- FENÓLICO DE GRAN ADHERENCIA PARA USO INDUSTRIAL D-20 DESCRIPCIÓN Fondo anticorrosivo a base de resina alquídica modificada, de alto poder antioxidante, excelente adherencia sobre hierro y acero, rápido secado y pigmento inhibidor de la corrosión, libre de plomo y cromo (fosfato de zinc modificado).", "../../../assets/images/Todos-los-productos/pinturas base agua/latex-titan-300x300.jpg", "Latex Titan", 45, "Base Agua");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "pintura anticorrosiva de aplicación directa sobre las superficies de hierro o acero, ya sean nuevas u oxidadas, sin necesidad de utilizar ninguna imprimación previa. USOSHierro y Acero Aplicación directa sobre hierro y acero, sin imprimaciones. Es eficaz incluso directamente sobre superficies oxidadas, con sólo eliminar las partículas sueltas de óxido. ", "../../../assets/images/Todos-los-productos/pinturas base agua/sellador-de-paredes-blanco-294x300 (1).jpg", "Sellador De Paredes", 98, "Base Agua");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "WASH PRIMERIMPRIMANTE DE DOS COMPONENTES ESPECIAL PARA PREPARARSUPERFICIES DE ACERO GALVANIZADO Y ALUMINIO.D-25 DESCRIPCIÓN Imprimante de dos componentes a base de vinil butiral, pigmento inhibidor sin plomo y un reactivo ácido orgánico que reacciona con el metal formando una película unida químicamente a la base.", "../../../../assets/images/Todos-los-productos/pinturas base agua/superlatex-300x231.jpg", "Super Latex", 67, "Base Agua");
    this.listaDeProductos.push(this.producto);
  }
  getBaseSolvente() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "PRIMER ALQUÍDICO FONDO ANTICORROSIVO ALQUÍDICO- FENÓLICO DE GRAN ADHERENCIA PARA USO INDUSTRIAL D-20 DESCRIPCIÓN Fondo anticorrosivo a base de resina alquídica modificada, de alto poder antioxidante, excelente adherencia sobre hierro y acero, rápido secado y pigmento inhibidor de la corrosión, libre de plomo y cromo (fosfato de zinc modificado).", "../../../assets/images/Todos-los-productos/pinturas base solvente/brillo-3-300x300.jpg", "R. Brillo", 80, "Base Solvente");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "pintura anticorrosiva de aplicación directa sobre las superficies de hierro o acero, ya sean nuevas u oxidadas, sin necesidad de utilizar ninguna imprimación previa. USOSHierro y Acero Aplicación directa sobre hierro y acero, sin imprimaciones. Es eficaz incluso directamente sobre superficies oxidadas, con sólo eliminar las partículas sueltas de óxido. ", "../../../assets/images/Todos-los-productos/pinturas base solvente/demarcacion-vial-image-300x267.jpg", "Defer Wer", 32, "Base Solvente");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "verde", "WASH PRIMERIMPRIMANTE DE DOS COMPONENTES ESPECIAL PARA PREPARARSUPERFICIES DE ACERO GALVANIZADO Y ALUMINIO.D-25 DESCRIPCIÓN Imprimante de dos componentes a base de vinil butiral, pigmento inhibidor sin plomo y un reactivo ácido orgánico que reacciona con el metal formando una película unida químicamente a la base.", "../../../../assets/images/Todos-los-productos/pinturas base solvente/mate-3-300x300.jpg", "R. Mate", 57, "Base Solvente");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "rojo", "Fondo sellador blanco de paredes, a base de resina acrílica estirenada. Sella y uniforma la superficie.", "../../../assets/images/Todos-los-productos/pinturas base solvente/pizarras-300x231.jpg", "R. Pizarras", 87, "Base Solvente");
    this.listaDeProductos.push(this.producto);
  }
  getImpermeabilizante() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "Fondo sellador blanco de paredes, a base de resina acrílica estirenada. Sella y uniforma la superficie.", "../../../assets/images/Todos-los-productos/impermeabilizante/paraconcreto-300x300.jpg", "P. Slinker", 200, "Impermeabilizante");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "PRIMER ALQUÍDICO FONDO ANTICORROSIVO ALQUÍDICO- FENÓLICO DE GRAN ADHERENCIA PARA USO INDUSTRIAL D-20 DESCRIPCIÓN Fondo anticorrosivo a base de resina alquídica modificada, de alto poder antioxidante, excelente adherencia sobre hierro y acero, rápido secado y pigmento inhibidor de la corrosión, libre de plomo y cromo (fosfato de zinc modificado).", "../../../assets/images/Todos-los-productos/impermeabilizante/para-fachadas-300x231.jpg", "F. Chered", 78, "Impermeabilizante");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "pintura anticorrosiva de aplicación directa sobre las superficies de hierro o acero, ya sean nuevas u oxidadas, sin necesidad de utilizar ninguna imprimación previa. USOSHierro y Acero Aplicación directa sobre hierro y acero, sin imprimaciones. Es eficaz incluso directamente sobre superficies oxidadas, con sólo eliminar las partículas sueltas de óxido. ", "../../../assets/images/Todos-los-productos/impermeabilizante/para-piscinas-241x187.jpg", "F. Impermeable Tex", 40, "Impermeabilizante");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "WASH PRIMERIMPRIMANTE DE DOS COMPONENTES ESPECIAL PARA PREPARARSUPERFICIES DE ACERO GALVANIZADO Y ALUMINIO.D-25 DESCRIPCIÓN Imprimante de dos componentes a base de vinil butiral, pigmento inhibidor sin plomo y un reactivo ácido orgánico que reacciona con el metal formando una película unida químicamente a la base.", "../../../../assets/images/Todos-los-productos/impermeabilizante/para-techos-241x187.jpg", "F. Teched Wel", 91, "Impermeabilizante");
    this.listaDeProductos.push(this.producto);
  }
  getParaMadera() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "Fondo sellador blanco de paredes, a base de resina acrílica estirenada. Sella y uniforma la superficie.", "../../../assets/images/Todos-los-productos/madera/madera-masilla-pa-madera-3.5l-multipass.png", "G. Masillus", 101, "Madera");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "PRIMER ALQUÍDICO FONDO ANTICORROSIVO ALQUÍDICO- FENÓLICO DE GRAN ADHERENCIA PARA USO INDUSTRIAL D-20 DESCRIPCIÓN Fondo anticorrosivo a base de resina alquídica modificada, de alto poder antioxidante, excelente adherencia sobre hierro y acero, rápido secado y pigmento inhibidor de la corrosión, libre de plomo y cromo (fosfato de zinc modificado).", "../../../assets/images/Todos-los-productos/madera/madera-sellador-de-madera-3.5l-multipass.png", "Sellador De Madera", 40, "Madera");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "pintura anticorrosiva de aplicación directa sobre las superficies de hierro o acero, ya sean nuevas u oxidadas, sin necesidad de utilizar ninguna imprimación previa. USOSHierro y Acero Aplicación directa sobre hierro y acero, sin imprimaciones. Es eficaz incluso directamente sobre superficies oxidadas, con sólo eliminar las partículas sueltas de óxido. ", "../../../assets/images/Todos-los-productos/madera/PISOTHANE-ok.jpg", "Pisothane", 70, "Madera");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "WASH PRIMERIMPRIMANTE DE DOS COMPONENTES ESPECIAL PARA PREPARARSUPERFICIES DE ACERO GALVANIZADO Y ALUMINIO.D-25 DESCRIPCIÓN Imprimante de dos componentes a base de vinil butiral, pigmento inhibidor sin plomo y un reactivo ácido orgánico que reacciona con el metal formando una película unida químicamente a la base.", "../../../../assets/images/Todos-los-productos/madera/vitrotane_pisos_arte-242x187.png", "Vitrotane", 50, "Madera");
    this.listaDeProductos.push(this.producto);
  }

  getCombos() {
    this.listaDeProductos = [];
    this.producto = new Producto(1, "amarillo", "Promocion combo1 con 3 latas de pintura Artex  mas 2 lijas y un rodillo de regalo Promoción válida en tiendas Comex® participantes del 01 de mayo al 31 de agosto del 2020. Consulta productos, colores y capacidades participantes en tu tienda Comex®. No aplica con otras promociones, ni en productos de especialidad. Aplica sobre precios de lista vigente. Sujeto a disponibilidad en tienda. No aplica en pago con tarjeta de crédito. No aplica en e-Commerce.", "../../../assets/images/combos50/combo1.jpg", "Combo 1", 55, "Combo 1");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "Promocion combo2 con 3 latas de pintura Ipecol  Promoción válida en tiendas Comex® participantes del 01 de mayo al 31 de agosto del 2020. Consulta productos, colores y capacidades participantes en tu tienda Comex®. No aplica con otras promociones, ni en productos de especialidad. Aplica sobre precios de lista vigente. Sujeto a disponibilidad en tienda. No aplica en pago con tarjeta de crédito. No aplica en e-Commerce.", "../../../assets/images/combos50/combo2.jpg", "Combo 2", 110, "Combo 2");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "Promocion combo3 con 2 latas de pintura Piletas  Promoción válida en tiendas Comex® participantes del 01 de mayo al 31 de agosto del 2020. Consulta productos, colores y capacidades participantes en tu tienda Comex®. No aplica con otras promociones, ni en productos de especialidad. Aplica sobre precios de lista vigente. Sujeto a disponibilidad en tienda. No aplica en pago con tarjeta de crédito. No aplica en e-Commerce.", "../../../assets/images/combos50/combo3.jpg", "antiCombo 3", 81, "Combo 3");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1,"amarillo", "Promocion combo4 con 3 latas de pintura Centelux  Promoción válida en tiendas Comex® participantes del 01 de mayo al 31 de agosto del 2020. Consulta productos, colores y capacidades participantes en tu tienda Comex®. No aplica con otras promociones, ni en productos de especialidad. Aplica sobre precios de lista vigente. Sujeto a disponibilidad en tienda. No aplica en pago con tarjeta de crédito. No aplica en e-Commerce.", "../../../assets/images/combos50/combo4.png", "Combo 4", 99, "Combo 4");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "Promocion combo5 con 3 latas de pintura Epoxi Promoción válida en tiendas Comex® participantes del 01 de mayo al 31 de agosto del 2020. Consulta productos, colores y capacidades participantes en tu tienda Comex®. No aplica con otras promociones, ni en productos de especialidad. Aplica sobre precios de lista vigente. Sujeto a disponibilidad en tienda. No aplica en pago con tarjeta de crédito. No aplica en e-Commerce.", "../../../assets/images/combos50/combo5.jpg", "Combo 5", 101, "Combo 5");
    this.listaDeProductos.push(this.producto);
  }
  getEnDescuento() {
    this.producto = new Producto(1, "anaranjado", "50% de descuento Pintura anticorrosiva alquídica a base de resinas alquídicas, solventes, óxido de hierro de alta calidad e inhibidores de corrosión libres de plomo. USOS:   Hierro y Acero Protección de estructuras metálicas, rejas de hierro, ventanas, puertas, cañerías, maquinaria, etc.,", "../../../assets/images/tipos-de-pinturas/anticorrosiva-OHM-241x187.jpg", "anticorr", 101, "anticoo");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "marron", "20% de descuento NITROLAC ACABADO NITROCELULÓSICO TIPO DUCO PARA EL REPINTADO DE AUTOS C-20 DESCRIPCIÓN Pintura, a base de nitrocelulosa y resinas sintéticas plastificantes, de secado rápido y fácil pulido. USOS:   Retoques y repintado general de automóviles, vehículos de trabajo pesado, refrigeradores, muebles metálicos, etc.", "../../../assets/images/tipos-de-pinturas/automotiva-nitrolac-300x231.jpg", "anticorr", 101, "anticoo");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "blanco", "30% de descuento Sellador de paredes fondo sellador blanco de paredes, a base de resina acrílica estirenada. Sella y uniforma la superficie.", "../../../assets/images/tipos-de-pinturas/baseAgua.jpg", "anticorr", 70, "anticoo");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "10% de descuento Esmalte sintético a base de resinas alquí­dicas, pigmentos orgánicos y/o inorgánicos y solventes seleccionados. Es un producto de fácil aplicación, muy buena adherencia, elasticidad y poder. USOS:   HIERRO Y ACERO protección de estructuras metálicas, maquinarias, puertas, ventanas, rejas, muebles de jardín, instalaciones industriales en ambientes de baja agresión química, etc.", "../../../../assets/images/tipos-de-pinturas/baseSolvente.jpg", "anticorr", 60, "anticoo");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "amarillo", "30% de descuento PINTURA PARA PISCINAS PINTURA AL AGUA PARA PISCINAS, CUARTOS DE BAÑO, TANQUES DE AGUA Y FUENTES DE CONCRETO A-72 DESCRIPCIÓN Pintura a base de resinas acrílicas al agua y pigmentos seleccionados que le confieren excelentes características de resistencia a inmersión de agua potable.", "../../assets/images/tipos-de-pinturas/impermeabilizante.jpg", "anticorr", 121, "anticoo");
    this.listaDeProductos.push(this.producto);
    this.producto = new Producto(1, "cefe", "50% de descuento SELLADOR DE MADERA FONDO TAPAPOROS PARA MADERA, A BASE DE NITROCELULOSA B-40 DESCRIPCIÓN Producto formulado a base de nitrocelulosa, resinas sintéticas plastificantes y solventes balanceados. USOS:   Para el sellado de poros en superficies de madera en general. Venestas, aglomerados, muebles, armarios, maderas decorativas, etc.", "../../assets/images/tipos-de-pinturas/madera-sellador-de-madera-3.5l-multipass.png", "anticorr", 191, "anticoo");
    this.listaDeProductos.push(this.producto);
  }

  productosEnGneral() {
    let res = false;
    if (this.titulo == "todos los productos") {
      res = true;
    }
    return res;
  }

  setImagen(producto: Producto) {
    localStorage.setItem('nombreProducto', producto.getNombre());
    localStorage.setItem('imagen', producto.getImagen());
    localStorage.setItem('precio', producto.getPrecio() + "");
    this.router.navigate(['/formulario_compra_productos']);
  }

}

