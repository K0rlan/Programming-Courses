import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-news-layout',
  templateUrl: './new-news-layout.component.html',
  styleUrls: ['./new-news-layout.component.css']
})
export class NewNewsLayoutComponent implements OnInit {

  items = [];
  item: string;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addingItem(newitem: string){
    this.items.unshift(newitem);
  }

}
