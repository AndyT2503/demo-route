import { FeatureComponent } from './modules/feature/feature.component';
import { ChildAComponent } from './components/home/child/child-a/child-a.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticateGuard } from './guard/authenticate.guard';
import { ChildBComponent } from './components/home/child/child-b/child-b.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    //canActivateChild: [AuthenticateGuard],
    title: 'Home',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
    ],
  },
  {
    path: 'feature',
    title: 'Feature',
    //canLoad: [AuthenticateGuard],
    //canActivate: [AuthenticateGuard],
    loadChildren: () =>
      import('./modules/feature/feature.module').then((m) => m.FeatureModule),
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    //canActivate: [AuthenticateGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
