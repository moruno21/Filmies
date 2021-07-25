import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Filmies';
  showNavbar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    //Here we check in which route are we in, just to show navbar or not
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        if (data.url === '/' || data.url === '/home') this.showNavbar = false;
        else this.showNavbar = true;
      }
    });
  }
}
