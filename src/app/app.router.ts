import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {HelloComponent} from './hello/hello.component';
import {AppComponent} from './app.component';
import {ProviderScrubComponent} from './provider-scrub/provider-scrub.component';



export const router: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path:'povider-scrub',
    component: ProviderScrubComponent
  },
  {
    path: '',
    redirectTo: 'povider-scrub',
    pathMatch: 'full',
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

