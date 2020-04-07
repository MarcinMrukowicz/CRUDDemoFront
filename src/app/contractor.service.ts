import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SetUpHTTPService} from './set-up-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(private httpClient: SetUpHTTPService) {
  }
  getAllContractors() {
    return this.httpClient.get('api/contractor');
  }
  deleteContractor(contractor) {
    return this.httpClient.delete('api/contractor', contractor);
  }
}
