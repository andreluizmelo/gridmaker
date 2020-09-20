import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DadosGrid } from '../entities/dados-grid';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gridcanvas',
  templateUrl: './gridcanvas.component.html',
  styleUrls: ['./gridcanvas.component.sass']
})
export class GridcanvasComponent implements OnInit {
  imagemOriginalBase64: string;

  @ViewChild('mycanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  
  constructor(public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.formSubmetido.subscribe((dadosForm: DadosGrid) =>{
      this.imagemOriginalBase64 = dadosForm.base64;
      console.log("imagem recebida");

      const image = new Image();
      image.onload = () =>{
        this.resizeCanvasToDisplaySize(this.canvas.nativeElement);
        
        const width = image.width;
        const height = image.height;

        const containerWidth = this.canvas.nativeElement.width;
        const containerHeight = this.canvas.nativeElement.height;
        
        let newWidth = image.width;
        let newHeight = image.height;
        if(width > containerWidth || height > containerHeight){
          const heightRatio = height / width;
          const canvasHeightRatio = containerHeight / containerWidth;
          if(heightRatio > canvasHeightRatio){
            newHeight = containerHeight;
            newWidth = width * containerHeight / height;
          }else{
            newHeight = height * containerWidth / width;
            newWidth = containerWidth
          }
        }

        this.ctx.drawImage(image, 0, 0, newWidth, newHeight);
        this.drawGrid(dadosForm.numeroColunas, dadosForm.corGrid);
      }
      image.src = this.imagemOriginalBase64;
    });
  }

  resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
 
    // If it's resolution does not match change it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
 
    return false;
  }

  exportarImagem(){
    const imagemExportada = this.canvas.nativeElement.toDataURL("image/png");
    console.log(imagemExportada);
    var dlLink = document.createElement('a');
    dlLink.download = "imagem-com-grid.png";
    dlLink.href = imagemExportada;
    dlLink.dataset.downloadurl = ["image/png", dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }

  drawGrid(numeroColunas: number, color: string){
    const containerWidth = this.canvas.nativeElement.width;
    const containerHeight = this.canvas.nativeElement.height;
    
    const pixelJump = containerWidth / numeroColunas;
    
    let x = 0;

    while(x < containerWidth){
      this.drawLine(x, 0, 0, containerHeight, color);
      x = x + pixelJump;
    }

    let y = 0

    while(y < containerHeight){
      this.drawLine(0, y, containerWidth, 0, color);
      y = y + pixelJump;
    }
  }

  drawLine(startX, startY, sizeX, sizeY, color){
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(startX + sizeX, startY + sizeY);
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
  }

  get mostrarPreview() : boolean{
    return this.imagemOriginalBase64 != null && this.imagemOriginalBase64 != "";
  }

  get ctx(){
    return this.canvas.nativeElement.getContext('2d');
  }

  get previewSrc() : string{
    if(this.imagemOriginalBase64 != null)
      return this.imagemOriginalBase64;
  }
}
