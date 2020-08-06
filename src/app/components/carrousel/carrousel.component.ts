import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  listaCatalogos: string[] = [];
  imgCatalogo = "";
  titulo = "";

  hrefArchivo="";
  constructor() { }

  ngOnInit(): void {
    this.titulo = localStorage.getItem('titulo');
    this.enlistar();
    this.setRutaArchivo();
  }
  setRutaArchivo(){
    if(this.titulo=="catalogo anticorrosivas"){
      this.hrefArchivo="../../../assets/pdfsCatalogos/Linea-anticorrosivas.pdf";
    }else{
      if(this.titulo=="catalogo automotivas"){
        this.hrefArchivo="../../../assets/pdfsCatalogos/Linea-automotivas.pdf";
      }else{
        if(this.titulo=="catalogo impermeabilizantes"){
          this.hrefArchivo="../../../assets/pdfsCatalogos/Linea-impermeabilizante.pdf";
        }else{
          if(this.titulo=="catalogo para maderas"){
            this.hrefArchivo="../../../assets/pdfsCatalogos/Linea-madera.pdf";
          }
        }
      }
    }
  }
  enlistar() {
    if (this.titulo == 'catalogo anticorrosivas') {
      this.getCatalogoAnticorrosivas();
    } else {
      if (this.titulo == 'catalogo automotivas') {
        this.getCatalogoAutomotivas();
      } else {
        if (this.titulo == 'catalogo impermeabilizantes') {
          this.getCatalogoImpermeabilizantes();
        } else {
          if (this.titulo == 'catalogo para maderas') {
            this.getCatalogoParaMaderas();
          } else {
            this.getDefault();
          }
        }
      }
    }
  }
  getCatalogoAnticorrosivas() {
    this.listaCatalogos = [];
    this.imgCatalogo = "../../../assets/images/catalogos/anticorrosivas/principal.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/anticorrosivas/img1.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/anticorrosivas/img2.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/anticorrosivas/img3.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/anticorrosivas/img4.png";
    this.listaCatalogos.push(this.imgCatalogo);
  }
  getDefault() {
    this.imgCatalogo = "../../../assets/images/imagenesCarousell/fondo1.jpg";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/imagenesCarousell/fondo2.jpg";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/imagenesCarousell/fondo3.jpg";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/imagenesCarousell/fondo4.jpg";
    this.listaCatalogos.push(this.imgCatalogo);
  }
  getCatalogoAutomotivas() {
    this.listaCatalogos = [];
    this.imgCatalogo = "../../../assets/images/catalogos/automotivas/principal.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/automotivas/img1.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/automotivas/img2.png";
    this.listaCatalogos.push(this.imgCatalogo);
  }
  getCatalogoImpermeabilizantes() {
    this.listaCatalogos = [];
    this.imgCatalogo = "../../../assets/images/catalogos/impermeabilizante/principal.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/impermeabilizante/img1.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/impermeabilizante/img2.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/impermeabilizante/img3.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/impermeabilizante/img4.png";
    this.listaCatalogos.push(this.imgCatalogo);
  }
  getCatalogoParaMaderas() {
    this.listaCatalogos = [];
    this.imgCatalogo = "../../../assets/images/catalogos/madera/principal.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/madera/img1.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/madera/img2.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/madera/img3.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/madera/img4.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/madera/img5.png";
    this.listaCatalogos.push(this.imgCatalogo);
    this.imgCatalogo = "../../../assets/images/catalogos/madera/img6.png";
    this.listaCatalogos.push(this.imgCatalogo);
  }

  catalogo(){
   let  res=false;
    if(this.titulo!='Pinturas En General'){
res=true;;
    }
    return res;
  }
}
