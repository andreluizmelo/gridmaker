import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gridmakerform',
  templateUrl: './gridmakerform.component.html',
  styleUrls: ['./gridmakerform.component.sass']
})
export class GridmakerformComponent implements OnInit {

  erroImagem: string;
  sucessoImagem: string;
  imagemBase64: string;

  constructor(public imageService: ImageService) { }

  ngOnInit(): void {
  }

  fileChangeEvent(fileInput: any){
    this.erroImagem = null;
    this.sucessoImagem
    console.log(fileInput);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagemBase64 = e.target.result;
      console.log(this.imagemBase64);
      this.sucessoImagem = "Imagem enviada com sucesso!";
    }
    reader.readAsDataURL(fileInput.target.files[0]);
  }
  aplicarImagem(){
    this.imageService.formSubmetido.emit({
      base64: this.imagemBase64, 
      numeroColunas: 20, 
      corGrid: "#dd0000"
    });
  }
}
