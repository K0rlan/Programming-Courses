import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-child3-component',
  templateUrl: './child3-component.component.html',
  styleUrls: ['./child3-component.component.css'],
  providers: []
})
export class Child3ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child-3 ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
