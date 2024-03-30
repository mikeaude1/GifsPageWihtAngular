
import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifts-page-home-page',
  templateUrl: `./home-page.component.html`,
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

  constructor(
    private GifService:GifService){}
    get gifs():Gif[]{
      return this.GifService.gifList;
    }
  }
