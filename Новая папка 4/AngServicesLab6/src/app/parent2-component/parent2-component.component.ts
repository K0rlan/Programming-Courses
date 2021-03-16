import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-parent2-component',
  templateUrl: './parent2-component.component.html',
  styleUrls: ['./parent2-component.component.css'],
  providers: [SharedService]
})
export class Parent2ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Parent-2 ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
