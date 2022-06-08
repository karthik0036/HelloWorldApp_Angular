// importing core modules of angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// whenever cli is used to generate new components services,it 
// will automatically update this file to immport and add them here so we can see update
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
