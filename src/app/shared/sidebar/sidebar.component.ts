import { Component, OnInit } from '@angular/core';
import {GifsServiceService} from "../../gifs/services/gifs-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _gifsService:GifsServiceService) { }

  get historial():Array<string>{
    return this._gifsService.historial;
  }

  ngOnInit(): void {
  }

  buscar( gifName: string):void{

    this._gifsService.buscarGifs( gifName );

  }

}
