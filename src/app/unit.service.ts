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
  delete(unit) {
    return this.httpClient.delete('api/unit', unit);
  }
  addUnit(unit) {
    return this.httpClient.post('api/unit', unit);
  }
  updateUnit(unit) {
    return this.httpClient.put('api/unit', unit);
  }
}
