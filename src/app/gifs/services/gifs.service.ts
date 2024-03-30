import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  public gifList:Gif[]=[]

  private _tagsHistory: string[]=[]
  private apiKey:string='hI3nBz95EDVSGGUOUSe2Qjc8pXW9ejWQ';
  private serviceUrl:string='https://api.giphy.com/v1/gifs';


  constructor( private http:HttpClient) {
     this.loadLocalStorage ();
     console.log('GIF SERVICE READY')
    }

  get tagHistory(){
    return [...this._tagsHistory];
  }

  private OrganizeHistory(tag:string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0,10);
    this.saveLocalStorage()
  }
  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify( this._tagsHistory));
  }
  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;

   this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if( this._tagsHistory.length === 0) return;
      this.searchTag(this._tagsHistory[0])

  }

   searchTag( tag:string ):void {
    if( tag.length === 0 ){return}
      this.OrganizeHistory(tag)

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit',10)
    .set('q',tag)

      this.http.get<SearchResponse>(`${this.serviceUrl}/search?`,{ params })
      .subscribe( resp=>{
        this.gifList=resp.data
      })
    /*fetch('https://api.giphy.com/v1/gifs/search?api_key=hI3nBz95EDVSGGUOUSe2Qjc8pXW9ejWQ&q=thundercats&limit=10')
      .then(resp => resp.json())
      .then(data => console.log(data))
  */
    }
}
