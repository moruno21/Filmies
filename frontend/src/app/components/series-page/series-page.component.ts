import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit {

  series: Series[] = [];

  constructor(private seriesService : SeriesService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(){
    this.seriesService.getSeries().subscribe((data)=>{
      console.log(data);
      
    }){

    }
  }

}
