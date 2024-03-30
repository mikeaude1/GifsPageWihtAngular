import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar</h5>
  <input type="text" class="form-control" placeholder="Buscar Gifts..." (keyup.enter)="searchTag()" #txtTagInput>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagImput!:ElementRef<HTMLInputElement>;

  constructor( private GifService:GifService) { }

  //searching( newTag:string){}
  searchTag( ) {
    const newTag= this.tagImput.nativeElement.value
    console.log({newTag});

    this.GifService.searchTag(newTag);

    this.tagImput.nativeElement.value='';
  }

}
