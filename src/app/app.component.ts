import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = '../assets/images/logo.jpg';
  url="https://www.google.com";

  ngOnInit():void {
    this.title = "Hello From Bridgelabz"
  }

  onClick($event:any){
    console.log("Save button is clicked",$event);
    window.open(this.url,"_blank");
  }
}
