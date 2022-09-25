import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while(child?.firstChild) {
            child = child.firstChild
          }
          return child;
        }),
        filter(c => !!c?.data),
        switchMap((c) => c!.data)
      )
      .subscribe((data) => {
        if (data['title']) {
          this.title.setTitle(data['title'])
        }
      });
  }

  goToDetail(): void {
    this.router.navigate(['detail', 1]);
  }
}
