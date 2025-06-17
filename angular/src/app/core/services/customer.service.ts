import { Injectable } from '@angular/core';
import {map, Observable, timer} from 'rxjs';
import {CUSTOMERS} from '../mock-data/customers.mock';
import {Customer, CustomerResponse} from "../models/customer.model";
import {Sort} from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomers(search: string, pageIndex: number, pageSize: number, sortEvent: Sort): Observable<CustomerResponse> {
    return timer(1000).pipe(
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
        const startItemIndex: number = pageIndex * pageSize;
        const endItemIndex: number = (pageIndex + 1) * pageSize;
        const pagedItems = sortedItems.slice(startItemIndex, endItemIndex);

        return { items: pagedItems, count };
      })
    );
  }

  getCustomerById(id: string): Observable<Customer | undefined> {
    return timer(500).pipe(
      map(() => {
        const customer = CUSTOMERS.find(c => c?.id === id);
        if (!customer) {
          console.warn(`Customer with ID ${id} not found.`);
          return undefined;
        }
        const sortedEvents = [...(customer.events || [])].sort((a, b) => {
          return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
        });
        return {...customer, events: sortedEvents};
      })
    );
  }

  updateCustomer(customer: Customer): Observable<Customer | undefined> {
    return timer(500).pipe(
      map(() => {
        const index = CUSTOMERS.findIndex(c => c?.id === customer.id);
        if (index === -1) {
          console.warn(`Customer with ID ${customer.id} not found.`);
          return undefined;
        }
        CUSTOMERS[index] = { ...CUSTOMERS[index], ...customer };
        return CUSTOMERS[index];
      })
    );
  }
}
