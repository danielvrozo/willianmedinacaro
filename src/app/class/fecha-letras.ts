export class FechaLetras {
    transform(fecha:any){
        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        
          const dias = [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
          ];
        
          const fechaObj = new Date(fecha);
          const diaSemana = dias[fechaObj.getDay()];
          const mes = meses[fechaObj.getMonth()];
          const anio = fechaObj.getFullYear();
          
          const fechaLetras = diaSemana + ", " + fechaObj.getDate() + " " + mes + " - " + anio;
        
          return fechaLetras;
    }
}