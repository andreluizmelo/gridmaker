import { EventEmitter, Injectable } from '@angular/core';
import { DadosGrid } from '../entities/dados-grid';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public formSubmetido: EventEmitter<DadosGrid> = new EventEmitter<DadosGrid>();
  constructor() { }
  novaImagem(dadosGrid: DadosGrid) : void{
    console.log("nova imagem emitida!");
    this.formSubmetido.emit(dadosGrid);
  }
}
