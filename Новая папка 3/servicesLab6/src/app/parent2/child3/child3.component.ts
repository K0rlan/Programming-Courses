import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  sharedValue: string;

  constructor(private sharedService: SharedService) {
    this.sharedValue = this.sharedService.getSharedValue();
  }

  ngOnInit(): void {
  }

}
