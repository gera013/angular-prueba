import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NasaApiService } from './shared/services/nasa-api.service';
import { LowerCasePipe } from './shared/pipes/lower-case.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutPageComponent,
    HomeComponent,
    LowerCasePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
