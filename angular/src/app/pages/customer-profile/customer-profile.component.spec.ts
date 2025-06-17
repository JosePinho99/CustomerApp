import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerProfileComponent } from './customer-profile.component';
import { CustomerService } from '../../core/services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {EventType} from '../../core/models/customer.model';

// Mock data
const mockCustomer = {
    id: 'c2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+1-303-555-0187',
    events: [
      { type: EventType.AccountCreated, timestamp: '2025-06-10T08:00:00Z', description: 'Signed up for an account' },
      { type: EventType.ProductReviewed, timestamp: '2025-06-11T10:15:00Z', description: 'Reviewed "Noise Cancelling Headphones"' },
      { type: EventType.LoggedIn, timestamp: '2025-06-13T09:45:00Z', description: 'Logged into account' },
    ],
};

describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;
  let customerServiceSpy: jasmine.SpyObj<CustomerService>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    const customerServiceMock = jasmine.createSpyObj('CustomerService', ['getCustomerById', 'updateCustomer']);
    const snackBarMock = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [CustomerProfileComponent],
      providers: [
        { provide: CustomerService, useValue: customerServiceMock },
        { provide: MatSnackBar, useValue: snackBarMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => 'c2' } }
          }
        }
      ]
    }).compileComponents();

    customerServiceSpy = TestBed.inject(CustomerService) as jasmine.SpyObj<CustomerService>;
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;

    customerServiceSpy.getCustomerById.and.returnValue(of(mockCustomer));
    customerServiceSpy.updateCustomer.and.returnValue(of(mockCustomer));

    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should load customer data on init', () => {
    expect(customerServiceSpy.getCustomerById).toHaveBeenCalledWith('c2');
    expect(component.customer).toEqual(mockCustomer);
    expect(component.profileForm.value.email).toBe(mockCustomer.email);
  });

  it('should call updateCustomer when editCostumer is called', () => {
    component.profileForm.setValue({ email: 'bob.smith@example.com', phone: '+1-303-555-0187' });
    component.editCostumer();

    expect(customerServiceSpy.updateCustomer).toHaveBeenCalled();
    expect(snackBarSpy.open).toHaveBeenCalledWith('Customer updated succesfully');
  });

  it('should reset form and stop editing on cancelEdition', () => {
    component.editing = true;
    component.profileForm.setValue({ email: 'bob.smith@exampgdfgdfgle.com', phone: '+1-303-555-0187' });
    component.cancelEdition();

    expect(component.editing).toBeFalse();
    expect(component.profileForm.value.email).toBe("bob.smith@example.com");
  });
});
