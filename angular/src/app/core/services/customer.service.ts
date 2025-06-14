import { Injectable } from '@angular/core';
import {map, Observable, timer} from 'rxjs';
import {CUSTOMERS} from '../mock-data/customers.mock';
import {Customer, CustomerResponse} from "../models/customer.model";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomers(search: string, pageEvent: PageEvent, sortEvent: Sort): Observable<CustomerResponse> {
      return timer(1500).pipe(
          map(_ => {
              //Filtering
            const filteredItems = CUSTOMERS.filter(customer => {
              return customer?.name?.toLowerCase().includes(search.toLowerCase())
                  || customer?.email?.toLowerCase().includes(search.toLowerCase())
            })
            const count = filteredItems.length;

              //Sorting
              const sortedItems = filteredItems.sort((a, b) => {
                  // Skip sorting if key is missing on either side
                  if (!(sortEvent?.active in a) || !(sortEvent?.active in b)) {
                      return 0;
                  }
                  const key = sortEvent.active as keyof Customer;
                  const aVal: any = a[key]?.toString().toLowerCase() ?? '';
                  const bVal: any = b[key]?.toString().toLowerCase() ?? '';
                  const comparison = aVal.localeCompare(bVal);
                  return sortEvent.direction === 'asc' ? comparison : -comparison;
              });

            //Paging
            const startItemIndex: number = pageEvent.pageIndex * pageEvent.pageSize;
            const endItemIndex: number = (pageEvent.pageIndex + 1) * pageEvent.pageSize;
            const pagedItems = sortedItems.slice(startItemIndex, endItemIndex);

            return { items: pagedItems, count };
      })
    );
  }


  getCustomerById(id: string) {
    return timer(400).pipe(
      map(() => CUSTOMERS.find(c => c?.id === id))
    );
  }
}
