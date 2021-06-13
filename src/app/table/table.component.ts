import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IProductData } from '../product-interface';

const sortIcons = {
  'asc' : '/assets/images/asc.png',
  'desc': '/assets/images/desc.png',
  'default': '/assets/images/default.png',
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  productData: any;
  direction: number;
  isAscOrder = true;
  column: string = 'name'; 
  iconImg = sortIcons.default;

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
    // Get response from api call
    this.apiService.getProductsData().subscribe((data:IProductData) => {
      this.productData = data.cookies; 
    })
  }

  // To Sort the table content based on the property
  sortBy(property) {
     
    let direction = this.isAscOrder ? 1 : -1;
    this.iconImg = this.isAscOrder ?  sortIcons.asc : sortIcons.desc
    this.column = property // Change icon based on selected column


    if (this.isAscOrder) { 
      this.productData =  this.productData.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
    } else {
      this.productData = this.productData.sort((a, b) => (a[property] > b[property]) ? -1 : 1);
    }
    this.isAscOrder = !this.isAscOrder;   // Changing the Order   
  }
}

