import { JsonPipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _historial:Array<string> = [];

  private apiKey:string = 'z14Qy9Y57XY0AyF87wsJ9M9Z10UhplmS';

  private url:string = 'https://api.giphy.com/v1/gifs';

  public resultados:Gif[] = [];

    get historial():Array<string> {
      return [...this._historial];
    }

  constructor(private http:HttpClient) { 

    this._historial =  JSON.parse(  localStorage.getItem('Historial')! ) || [];
    this.resultados = JSON.parse ( localStorage.getItem('Resultados')! ) || [];
      // if( localStorage.getItem('historial') ){
      //   this._historial =  JSON.parse(  localStorage.getItem('historial')! ); // El ! lo uso para que typescript confie en que esto nunca va a ser null
      // }

  }

  buscarGifs( gifName:string ):void{

    
    gifName = gifName.trim().toLowerCase();
  

    if(gifName.trim().length === 0){
      return;
    }
    if(!this._historial.includes(gifName)){
      this._historial.unshift(gifName);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem ('Historial', JSON.stringify( this._historial ) );
    }

    const params:HttpParams = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit','10')
    .set('q', gifName)
                                          // url + endpoint + params
    this.http.get<SearchGIFResponse>(`${this.url}/search?`, { params } ).subscribe((resp) => {
      console.log(  resp  );
      this.resultados = resp.data
      localStorage.setItem('Resultados', JSON.stringify(this.resultados));
    });
  }

}
