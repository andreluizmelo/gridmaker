import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public imagemAlterada: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  novaImagem(novaImagemEmBase64: string) : void{
    console.log("nova imagem emitida!");
    this.imagemAlterada.emit(novaImagemEmBase64);
  }
}
