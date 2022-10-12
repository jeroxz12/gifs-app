import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifsServiceService} from "../services/gifs-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private _gifsService:GifsServiceService) { }

  ngOnInit(): void {
  }

  buscar(  ):void{
    const valorABuscar = this.txtBuscar.nativeElement.value;
    if(valorABuscar.trim().length === 0){
      return;
    }
    this._gifsService.buscarGifs(valorABuscar);
    this.txtBuscar.nativeElement.value = '';
  }
}
