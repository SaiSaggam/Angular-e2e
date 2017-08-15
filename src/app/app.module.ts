import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app.router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { ProviderScrubComponent } from './provider-scrub/provider-scrub.component';
import { LoggingService } from './services/logging.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelloComponent,
    ProviderScrubComponent,
    
    
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule
    
    
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
