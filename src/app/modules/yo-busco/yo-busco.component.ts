import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-yo-busco',
  templateUrl: './yo-busco.component.html',
  styleUrls: ['./yo-busco.component.css']
})
export class YoBuscoComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvasRef?: ElementRef;
  @ViewChild('downloadLink', { static: true }) downloadLinkRef?: ElementRef;

  nombreUsuario: string = '';
  activeButton: boolean = false;
  imagenDefault: HTMLImageElement = new Image(); // Imagen default
  imagenUsuario: HTMLImageElement | null = null; // Imagen de usuario

  optionText:any = '';
  optionValue:any;

  

  modelarTextos(event:any){
    const opcion = event.target.selectedOptions[0]; // Obtén la opción seleccionada
    this.optionValue = opcion.value; // Asigna el valor al modelo
    this.optionText = opcion.textContent;

    this.crearImagenPersonalizada();
  }

  validateInput(input:any){
    return Boolean(input);
  }

  constructor() {
    this.imagenDefault.src = '../../../assets/campana/construir-futuro.jpg';
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
    let nombreDivY = 58;
    if(this.nombreUsuario && this.imagenUsuario){
      this.activeButton = true;
    } else {
      this.activeButton = false;
    }

    if (this.nombreUsuario.length > 15) {
      size_name = '20px';
      nombreDivY = 58;
    } else if (this.nombreUsuario.length > 13) {
      size_name = '30px';
      nombreDivY = 58;
    } else if (this.nombreUsuario.length > 11) {
      size_name = '35px';
      nombreDivY = 58;
    } else if (this.nombreUsuario.length > 9) {
      size_name = '40px';
      nombreDivY = 58;
    } else if (this.nombreUsuario.length > 7) {
      size_name = '45px';
      nombreDivY = 62;
    } else {
      size_name = '50px';
      nombreDivY = 62;
    }

    canvas.width = 500;
    canvas.height = 888.89;

    // Dibujar la imagen default en el canvas
    ctx.drawImage(this.imagenDefault, 0, 0, canvas.width, canvas.height);

    // Dibujar la imagen de usuario en el canvas si está disponible
    if (this.imagenUsuario) {
      // Calcular el tamaño de la imagen para que encaje en el círculo sin deformarse
      const circleRadius = 172;
      const circleDiameter = circleRadius * 2;
      const maxImageSize = 452; // El tamaño máximo que desees para la imagen
      let scaledWidth, scaledHeight;

      if (this.imagenUsuario.width > this.imagenUsuario.height) {
        // La imagen es más ancha que alta
        scaledWidth = maxImageSize;
        scaledHeight = (maxImageSize * this.imagenUsuario.height) / this.imagenUsuario.width;
      } else {
        // La imagen es más alta que ancha
        scaledWidth = (maxImageSize * this.imagenUsuario.width) / this.imagenUsuario.height;
        scaledHeight = maxImageSize;
      }

      // Dibujar la imagen de usuario en el canvas escalandola al tamaño calculado
      ctx.save();
      ctx.beginPath();
      ctx.arc(252, 447, circleRadius, 0, Math.PI * 2); // Coordenadas y radio para un círculo
      ctx.closePath();
      ctx.clip(); // Establecer el área recortada
      ctx.drawImage(this.imagenUsuario, 252 - scaledWidth / 2, 447 - scaledHeight / 2, scaledWidth, scaledHeight); // Dibujar imagen centrada y escalada
      ctx.restore(); // Restaurar el contexto
    }

    // Agregar el div con el texto centrado para nombreDelUsuario
    const nombreDivWidth = 300;
    const nombreDivHeight = 45;
    const nombreDivX = 165;
    

    ctx.fillStyle = 'transparent';
    
    ctx.fillRect(nombreDivX, nombreDivY, nombreDivWidth, nombreDivHeight);

    // Agregar el texto centrado en el div
    const nombreUsuarioX = nombreDivX + nombreDivWidth / 2;
    const nombreUsuarioY = nombreDivY + nombreDivHeight / 2;
    ctx.font = `800 ${size_name} Arial, sans-serif`;
    ctx.fillStyle = '#134193';
    ctx.textAlign = 'center';
    ctx.lineWidth = 1; 
    
    ctx.fillText(this.nombreUsuario, nombreUsuarioX, nombreUsuarioY);

    // Agregar el div con el texto centrado para optionsThema
    const optionsThemaDivWidth = 350;
    const optionsThemaDivHeight = 45;
    const optionsThemaDivX = 71;
    const optionsThemaDivY = 193;

    ctx.fillStyle = 'white'; // Fondo rojo del div
    ctx.fillRect(optionsThemaDivX, optionsThemaDivY, optionsThemaDivWidth, optionsThemaDivHeight);

    ctx.font = `bold ${this.optionValue} Arial, sans-serif`; 
    ctx.fillStyle = '#134193';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if(this.optionText === 'Juntas de Acción Comunal'){
      this.optionText = 'JAC';
    }
    
    ctx.fillText(this.optionText, optionsThemaDivX + optionsThemaDivWidth / 2, optionsThemaDivY + optionsThemaDivHeight / 2);

    const dataURL = canvas.toDataURL('image/jpg');

    const downloadLink: HTMLAnchorElement = this.downloadLinkRef?.nativeElement;
    downloadLink.href = dataURL;

    downloadLink.style.display = 'block';
  }

}
