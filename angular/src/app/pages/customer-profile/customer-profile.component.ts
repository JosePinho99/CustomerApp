import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-customer-profile',
  imports: [CommonModule],
  templateUrl: './customer-profile.component.html',
  standalone: true,
  styleUrl: './customer-profile.component.scss'
})
export class CustomerProfileComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
