import {Component} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {CustomerService} from '../../core/services/customer.service';
import {Router} from '@angular/router';
import {MatSort, MatSortHeader, Sort} from '@angular/material/sort';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    BehaviorSubject, combineLatest,
    concat,
    debounceTime,
    distinctUntilChanged, map, merge,
    Observable,
    of,
    startWith,
    switchMap, tap
} from "rxjs";
import {AvatarColorPipe} from "../../core/pipes/avatar-color.pipe";
import {Customer} from "../../core/models/customer.model";

@Component({
  selector: 'app-customer-list',
    imports: [
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderCellDef,
        MatCell,
        MatHeaderRow,
        MatRow,
        NgIf,
        MatRowDef,
        MatHeaderRowDef,
        MatCellDef,
        MatSort,
        MatSortHeader,
        MatButton,
        MatPaginator,
        MatFormField,
        MatInput,
        FormsModule,
        MatLabel,
        ReactiveFormsModule,
        AsyncPipe,
        AvatarColorPipe,
    ],
  templateUrl: './customer-list.component.html',
  standalone: true,
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
    displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
    pageOptions: number[] = [5, 10, 20];
    totalElements: number = 10;
    loadingFirstTime: boolean = true;

    searchControl = new FormControl<string>('', { nonNullable: true });
    sort$ = new BehaviorSubject<Sort>({ active: '', direction: '' });
    pagination$ = new BehaviorSubject<PageEvent>({ pageIndex: 0, pageSize: 10, length: 0 });
    pageSize$: Observable<number> = this.pagination$.pipe(map((event) => event.pageSize));
    pageIndex$: Observable<number> = this.pagination$.pipe(map((event) => event.pageIndex));

    search$: Observable<string> = merge(
        of(this.searchControl.value), // emits immediately
        this.searchControl.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged()
        )
    );

    data$: Observable<Customer[]> = combineLatest([this.search$, this.pagination$, this.sort$]).pipe(
        switchMap(([search, pageEvent, sortEvent]) => {
            return concat(
                of(Array(pageEvent.pageSize).fill({ isSkeleton: true })), // show skeletons while loading
                this.customerService.getCustomers(search, pageEvent, sortEvent).pipe(
                    tap((response) => {
                        this.totalElements = response.count;
                        this.loadingFirstTime = false;
                    }),
                    map((response) => response.items)
                )
            );
        })
    );

    constructor(private customerService: CustomerService, private router: Router) {}

    viewCustomer(id: string): void {
        this.router.navigate(['/customer', id]);
    }
}
