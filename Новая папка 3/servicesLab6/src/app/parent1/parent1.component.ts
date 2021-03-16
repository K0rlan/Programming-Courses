import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css'],
  providers: [LoggingService, SharedService]
})
export class Parent1Component implements OnInit {
  sharedValue: string;

  constructor(private sharedService: SharedService) {
    this.sharedValue = this.sharedService.getSharedValue();
  }

  ngOnInit(): void {
  }
}
