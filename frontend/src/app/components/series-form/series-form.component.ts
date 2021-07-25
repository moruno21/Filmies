import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.css'],
})
export class SeriesFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  series: Series = {
    title: '',
    description: '',
    image: '',
  };

  done: boolean = false;
  update: boolean = false;
  error: boolean = false;

  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.seriesService.getOneSeries(params.id).subscribe(
        (res) => {
          this.series = res;
          this.update = true;
        },
        (err) => console.log(err)
      );
    }
  }

  postSeries() {
    delete this.series.id;
    if (this.series.title === '') {
      this.error = true;
    } else {
      this.error = false;
      this.seriesService.postSeries(this.series).subscribe(
        (res) => {
          this.done = true;
        },
        (err) => console.log(err)
      );
    }
  }

  updateSeries(id: any, series: Series) {
    if (series.title === '') {
      this.error = true;
    } else {
      this.error = false;
      this.seriesService.updateSeries(id, series).subscribe(
        (res) => {
          this.done = true;
        },
        (err) => console.log(err)
      );
    }
  }
}
