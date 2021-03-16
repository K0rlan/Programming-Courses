import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-parent1-component',
  templateUrl: './parent1-component.component.html',
  styleUrls: ['./parent1-component.component.css'],
  providers: [SharedService]
})
export class Parent1ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Parent-1 ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
