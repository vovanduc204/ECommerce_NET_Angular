import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/panigation';
import { IProduct } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'NON-STOP';
  products: IProduct[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/products?pageSize=10&pageIndex=1").subscribe((response: IPagination) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

}
