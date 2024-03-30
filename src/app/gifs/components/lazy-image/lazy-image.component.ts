import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {

  @Input()
  public url!:string;

  @Input()
  public alt:string='';

  public hasLoaded:boolean=false;

  OnInit():void{
    if(!this.url ) throw new Error('URL property is required');

  }
  onLoad(){
    setTimeout(()=>this.hasLoaded=true, 1000)
  }

}
