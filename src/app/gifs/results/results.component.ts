import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  constructor(private resultadoService:GifsServiceService) { }

  get resultados(){
    return this.resultadoService.resultados;
  }


  ngOnInit(): void {
  }

}
