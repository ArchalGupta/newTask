import { Component } from '@angular/core';
// import { MyMainService } from './main.service';
// import { MySharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
  ) { }

  ngOnInit() {
    // Get all product list on component init
    // this.myMainService.getProducts().subscribe(data => {
    //   this.products = data.products;
    // });
  }
}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   constructor() {
//   }


//   ngOnInit() {
//   }
// }