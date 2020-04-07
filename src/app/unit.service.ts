import { Injectable } from '@angular/core';
import {SetUpHTTPService} from './set-up-http.service';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private httpClient: SetUpHTTPService) { }
  getAll() {
    return this.httpClient.get('api/unit');
  }
  delete(contractor) {
    return this.httpClient.delete('api/unit', contractor);
  }
}
