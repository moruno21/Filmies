import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css'],
})
export class SeriesPageComponent implements OnInit {
  series: any = [];

  constructor(private seriesService: SeriesService, private router: Router) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }

  editSeries(id: string) {
    this.router.navigate([`/series/edit/${id}`]);
  }

  deleteSeries(id: string) {
    this.seriesService.deleteSeries(id).subscribe(
      (res) => {
        this.getSeries();
      },
      (err) => console.log(err)
    );
  }
}
