import { Injectable } from '@angular/core';
import {SetUpHTTPService} from './set-up-http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private httpClient: SetUpHTTPService) {
  }

  getAll() {
    return this.httpClient.get('api/item');
  }

  delete(item) {
    return this.httpClient.delete('api/item', item);
  }

  updateItem(item) {
    return this.httpClient.put('api/item', item);
  }

  addItem(item) {
    return this.httpClient.post('api/item', item);
  }
}

