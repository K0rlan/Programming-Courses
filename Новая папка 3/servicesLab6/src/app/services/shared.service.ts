// tslint:disable-next-line:import-spacing
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class SharedService {

  constructor(private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getSharedValue(){
    // tslint:disable-next-line:prefer-const
    let sharedValue: string;
    sharedValue = 'This is the shared value';
    this.loggingService.log('Shared value: ' + sharedValue);
    return sharedValue;
  }
}
