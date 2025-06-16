import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-customer-profile',
  imports: [CommonModule, MatCard, MatFormField, MatFormField, MatLabel, MatIcon, MatButton, MatInput, MatFormField],
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
