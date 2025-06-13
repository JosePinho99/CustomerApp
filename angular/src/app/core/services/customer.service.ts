import { Injectable } from '@angular/core';
import {map, timer} from 'rxjs';
import {CUSTOMERS} from '../mock-data/customers.mock';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomers() {
    return timer(5000).pipe(
      map(() => CUSTOMERS)
    );
  }

  getCustomerById(id: string) {
    return timer(400).pipe(
      map(() => CUSTOMERS.find(c => c?.id === id))
    );
  }
}
