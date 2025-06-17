import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {Customer, CustomerEvent} from '../../core/models/customer.model';
import {CustomerService} from '../../core/services/customer.service';
import {LoadingDirective} from '../../core/utils/loading.directive';
import {AvatarColorPipe} from '../../core/pipes/avatar-color.pipe';
import {EventIconPipe} from '../../core/pipes/customer-event.pipe';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-profile',
  imports: [CommonModule, MatCard, MatFormField, MatFormField, MatLabel, MatError, MatIcon, MatButton, MatInput, MatFormField, LoadingDirective, AvatarColorPipe, EventIconPipe, ReactiveFormsModule],
  templateUrl: './customer-profile.component.html',
  standalone: true,
  styleUrl: './customer-profile.component.scss'
})
export class CustomerProfileComponent implements OnInit {
  customer: Customer | undefined = undefined;
  loading: boolean = true;
  editing: boolean = false;
  loadingEvents: CustomerEvent[] = Array(3).fill({});
  profileForm!: FormGroup;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]{7,}$/)]]
    });
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.loadCustomer(id);
  }

  loadCustomer(id: string) {
    this.loading = true;
    this.customerService.getCustomerById(id).subscribe(customer => {
      this.customer = customer;
      this.profileForm.patchValue({
        email: customer?.email || '',
        phone: customer?.phone || ''
      });
      this.loading = false;
    });
  }

  editCostumer() {
    const updatedCustomer = {
      ...this.customer,
      ...this.profileForm.value
    };
    this.loading = true;
    this.customer = undefined;
    this.editing = false;
    this.customerService.updateCustomer(updatedCustomer).subscribe((customer) => {
      if (customer) {
        this.snackBar.open("Customer updated succesfully");
      }
      this.loadCustomer(customer!.id);
    });
  }

  cancelEdition() {
    this.profileForm.patchValue({
      email: this.customer?.email || '',
      phone: this.customer?.phone || ''
    });
    this.editing = false;
  }


  get emailControl() {
    return this.profileForm.get('email');
  }

  get phoneControl() {
    return this.profileForm.get('phone');
  }
}
