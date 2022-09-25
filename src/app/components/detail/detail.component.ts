import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject, Subscription, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  //subscriptions!: Subscription[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  destroyed$ = new Subject<void>();
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => console.log(params['id']));
    // console.log(this.activatedRoute.snapshot.params['id']);
    //console.log(this.activatedRoute.snapshot.params['id']);
    //this.activatedRoute.params.subscribe(params => console.log(params));
    //console.log(this.activatedRoute.snapshot.params);
    // this.activatedRoute.queryParams
    // .pipe(
    //   switchMap(x => of(x)),
    //   takeUntil(this.destroyed$),
    // )
    // .subscribe(params => console.log(params))
    this.activatedRoute.params.subscribe(x => console.log(x))
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  backToHome(): void {
    this.router.navigate(['home'], {
      queryParams: {
        userId: 'asdad'
      }
    });
  }
}
