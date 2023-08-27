import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bienestar-animal',
  templateUrl: './bienestar-animal.component.html', // Ajusta la ruta a tu plantilla
  styleUrls: ['./bienestar-animal.component.css'], // Ajusta la ruta a tus estilos
})
export class BienestarAnimalComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef?: ElementRef;
  @ViewChild('downloadLink', { static: true }) downloadLinkRef?: ElementRef;

  nombreUsuario: string = '';
  activeButton: boolean = false;
  imagenDefault: HTMLImageElement = new Image(); // Imagen default
  imagenUsuario: HTMLImageElement | null = null; // Imagen de usuario

  constructor() {
    this.imagenDefault.src = '../../../assets/campana/bienestar-animal.png';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.crearImagenPersonalizada();
    }, 500);
  }

  cargarImagen(event: any): void {
    this.imagenUsuario = new Image();
    this.imagenUsuario.src = URL.createObjectURL(event.target.files[0]);

    this.imagenUsuario.onload = () => {
      this.crearImagenPersonalizada();
    };
  }


  crearImagenPersonalizada() {
    const canvas: HTMLCanvasElement = this.canvasRef?.nativeElement;
    const ctx: any = canvas.getContext('2d');
    let size_name: string;

    if(this.nombreUsuario && this.imagenUsuario){
      this.activeButton = true;
    } else {
      this.activeButton = false;
    }

    if (this.nombreUsuario.length > 15) {
      size_name = '20px';
    } else if (this.nombreUsuario.length > 13) {
      size_name = '30px';
    } else if (this.nombreUsuario.length > 11) {
      size_name = '35px';
    } else if (this.nombreUsuario.length > 9) {
      size_name = '40px';
    } else if (this.nombreUsuario.length > 7) {
      size_name = '45px';
    } else {
      size_name = '50px';
    }

    canvas.width = 500;
    canvas.height = 888.89;

    // Dibujar la imagen default en el canvas
    ctx.drawImage(this.imagenDefault, 0, 0, canvas.width, canvas.height);

    // Dibujar la imagen de usuario en el canvas si está disponible
    if (this.imagenUsuario) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(252, 447, 186, 0, Math.PI * 2); // Coordenadas y radio para un círculo
      ctx.closePath();
      ctx.clip(); // Establecer el área recortada
      ctx.drawImage(this.imagenUsuario, 55, 256, 400, 400); // Dibujar imagen dentro del círculo recortado
      ctx.restore(); // Restaurar el contexto
    }

    // Agregar el div con el texto centrado para nombreDelUsuario
    const nombreDivWidth = 371;
    const nombreDivHeight = 63;
    const nombreDivX = 61;
    const nombreDivY = 56;

    ctx.fillStyle = 'transparent';
    ctx.fillRect(nombreDivX, nombreDivY, nombreDivWidth, nombreDivHeight);

    // Agregar el texto centrado en el div
    const nombreUsuarioX = nombreDivX + nombreDivWidth / 2;
    const nombreUsuarioY = nombreDivY + nombreDivHeight / 2;
    ctx.font = `800 ${size_name} 'Nanum Gothic', sans-serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.nombreUsuario, nombreUsuarioX, nombreUsuarioY);

    const dataURL = canvas.toDataURL('image/jpg');

    const downloadLink: HTMLAnchorElement = this.downloadLinkRef?.nativeElement;
    downloadLink.href = dataURL;

    downloadLink.style.display = 'block';
  }
}