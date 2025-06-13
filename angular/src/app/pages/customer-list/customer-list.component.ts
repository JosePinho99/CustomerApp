import {Component, OnInit} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Customer} from '../../core/models/customer.model';
import {CustomerService} from '../../core/services/customer.service';
import {Router} from '@angular/router';
import {MatSort, MatSortHeader} from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  imports: [
    MatFormField,
    MatLabel,
    MatTable,
    MatInput,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatProgressSpinner,
    NgIf,
    MatRowDef,
    MatHeaderRowDef,
    MatButton,
    MatCellDef,
    MatSort,
    MatSortHeader,
    NgForOf
  ],
  templateUrl: './customer-list.component.html',
  standalone: true,
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Customer>([]);
  loading = true;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.dataSource.data = customers;
      this.loading = false;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  viewCustomer(id: string): void {
    this.router.navigate(['/customer', id]);
  }

  skeletonRows = Array(5).fill({ isSkeleton: true });

  get dataSourceToUse() {
    return this.loading ? this.skeletonRows : this.dataSource.data;
  }
}
