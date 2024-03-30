import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor( private GifService:GifService) { }

  get tags(){
  return  this.GifService.tagHistory;
  }
  buscarxBoton(tittle:string){
    this.GifService.searchTag(tittle)
  }
}
